import AddButton from '../components/AddButton';
import CancelButton from '../components/CancelButton';
import FormInputGroup from '../components/FormInputGroup';
import FormSelectGroup from '../components/FormSelectGroup';
import FormTextAreaGroup from '../components/FormTextAreaGroup';
import { ids } from '../constants/elements';
import { Priority, createTodo } from '../models/todo';
import { ViewProps, navigate } from '../router';
import { todoService } from '../services/todoService';
import { camelCaseToTitleCase } from '../utils/strings';
import { inlineStyles } from '../utils/styles';

export default function AddTask(props: ViewProps) {
  const { listId } = props.queryParams;

  props.parent.appendChild(AddTaskForm());

  function AddTaskForm() {
    const form = document.createElement('form');
    form.id = ids.ADD_TASK_FORM;
    form.style.cssText = inlineStyles({
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      padding: '1rem',
      borderRadius: '0.5rem',
      boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.4)',
      backgroundColor: '#424242',
      maxWidth: '600px',
      height: '100%',
    });

    function formGroupContainerStyles() {
      return inlineStyles({
        display: 'flex',
        flexDirection: 'column',
        gap: '0.25rem',
      });
    }

    function formLabelStyles() {
      return inlineStyles({
        color: '#ffffff',
      });
    }

    function formInputStyles() {
      return inlineStyles({
        fontSize: '1rem',
        padding: '0.25rem',
        outline: 'none',
        backgroundColor: 'inherit',
        color: '#ffffff',
        border: '1px solid #2b2a2a',
        borderRadius: '0.25rem',
      });
    }

    function formOptionStyles() {
      return inlineStyles({
        padding: '1rem',
        backgroundColor: '#424242',
        color: '#ffffff',
        fontSize: '0.85rem',
      });
    }

    const titleInputGroup = FormInputGroup({
      containerStyles: formGroupContainerStyles(),
      labelText: 'Title',
      labelStyles: formLabelStyles(),
      inputId: 'title',
      inputName: 'title',
      inputType: 'text',
      inputStyles: formInputStyles(),
    });

    const titleInput = titleInputGroup.querySelector('input');

    const descriptionTextAreaGroup = FormTextAreaGroup({
      containerStyles: formGroupContainerStyles() + 'flex:1;',
      labelText: 'Description',
      labelStyles: formLabelStyles(),
      textAreaId: 'description',
      textAreaName: 'description',
      textAreaStyles: inlineStyles({
        fontSize: '1rem',
        padding: '0.25rem',
        outline: 'none',
        backgroundColor: 'inherit',
        color: '#ffffff',
        border: '1px solid #2b2a2a',
        borderRadius: '0.25rem',
        resize: 'none',
        height: '100%',
      }),
    });

    const descriptionTextArea =
      descriptionTextAreaGroup.querySelector('textarea');

    const dueDateInputGroup = FormInputGroup({
      containerStyles: formGroupContainerStyles(),
      labelText: 'Due Date',
      labelStyles: formLabelStyles(),
      inputId: 'dueDate',
      inputName: 'dueDate',
      inputType: 'date',
      inputStyles: formInputStyles(),
    });

    const dueDateInput = dueDateInputGroup.querySelector('input');

    const prioritySelectGroup = FormSelectGroup({
      containerStyles: formGroupContainerStyles(),
      labelText: 'Priority',
      labelStyles: formLabelStyles(),
      selectId: 'priority',
      selectName: 'priority',
      selectStyles: formInputStyles(),
      options: [
        {
          valueText: 'Select a priority',
          selected: true,
          disabled: true,
          styles: formOptionStyles(),
        },
        {
          valueText: 'Low',
          value: 'Low',
          styles: formOptionStyles(),
        },
        {
          valueText: 'Medium',
          value: 'Medium',
          styles: formOptionStyles(),
        },
        {
          valueText: 'High',
          value: 'High',
          styles: formOptionStyles(),
        },
      ],
    });

    const prioritySelect = prioritySelectGroup.querySelector('select');

    function handleInputFocus(e: Event & { target: HTMLElement }) {
      e.target.style.backgroundColor = '#2b2a2a';
    }

    function handleInputBlur(e: Event & { target: HTMLElement }) {
      e.target.style.backgroundColor = 'inherit';
    }

    [titleInput, descriptionTextArea, dueDateInput].forEach(element => {
      element.addEventListener('focus', handleInputFocus);
      element.addEventListener('blur', handleInputBlur);
    });

    function handlePriorityFocus() {
      prioritySelect.style.boxShadow = '0px 0px 0px 4px #2b2a2a';
      prioritySelect.style.transition = 'box-shadow 0.3s ease';
    }

    function handleBlur() {
      prioritySelect.style.boxShadow = '';
      prioritySelect.style.transition = '';
    }

    prioritySelect.addEventListener('focus', handlePriorityFocus);
    prioritySelect.addEventListener('blur', handleBlur);

    form.appendChild(titleInputGroup);
    form.appendChild(dueDateInputGroup);
    form.appendChild(prioritySelectGroup);
    form.appendChild(descriptionTextAreaGroup);
    form.appendChild(Buttons());

    function handleFormSubmit(event: Event & { target: HTMLFormElement }) {
      event.preventDefault();
      const todoData = {} as { [key: string]: string };

      for (const [key, value] of new FormData(event.target).entries()) {
        if (value instanceof Object) {
          throw Error(
            `${camelCaseToTitleCase({ str: key })} is expected to be a string`
          );
        }
        todoData[key] = value;
      }

      try {
        const { title, description, dueDate, priority } = todoData;
        const dueDateAsDate = new Date(dueDate + 'T00:00:00.000');
        const todo = createTodo({
          listId,
          title,
          description,
          dueDate: dueDateAsDate,
          priority: Priority[priority],
        });
        const { addTodo } = todoService();
        addTodo({ todo });
        document.removeEventListener('submit', handleFormSubmit);
        const returnUrl = listId ? `/lists/${listId}` : '/';
        navigate(returnUrl);
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message);
        }
      }
    }

    form.addEventListener('submit', handleFormSubmit);

    return form;
  }

  function Buttons() {
    const container = document.createElement('div');
    container.style.cssText = inlineStyles({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem',
      paddingLeft: '0.25rem',
    });

    const cancelButton = CancelButton();
    const addButton = AddButton();

    container.appendChild(cancelButton);
    container.appendChild(addButton);

    return container;
  }
}

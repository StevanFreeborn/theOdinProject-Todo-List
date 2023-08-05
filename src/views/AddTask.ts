import CancelButton from '../components/CancelButton';
import FormInputGroup from '../components/FormInputGroup';
import FormSelectGroup from '../components/FormSelectGroup';
import FormTextAreaGroup from '../components/FormTextAreaGroup';
import { ids } from '../constants/elements';
import { Priority, createTodo } from '../models/todo';
import { ViewProps, navigate } from '../router';
import { todoService } from '../services/todoService';
import { camelCaseToTitleCase } from '../utils/strings';

export default function AddTask(props: ViewProps) {
  const { listId } = props.queryParams;

  props.parent.appendChild(AddTaskForm());

  function AddTaskForm() {
    const form = document.createElement('form');
    form.id = ids.ADD_TASK_FORM;

    const titleInput = FormInputGroup({
      labelText: 'Title',
      inputId: 'title',
      inputName: 'title',
      inputType: 'text',
    });

    const descriptionTextArea = FormTextAreaGroup({
      labelText: 'Description',
      textAreaId: 'description',
      textAreaName: 'description',
    });

    const dueDateInput = FormInputGroup({
      labelText: 'Due Date',
      inputId: 'dueDate',
      inputName: 'dueDate',
      inputType: 'date',
    });

    const prioritySelect = FormSelectGroup({
      labelText: 'Priority',
      selectId: 'priority',
      selectName: 'priority',
      options: [
        {
          valueText: 'Select a priority',
          selected: true,
          disabled: true,
        },
        {
          valueText: 'Low',
          value: 'Low',
        },
        {
          valueText: 'Medium',
          value: 'Medium',
        },
        {
          valueText: 'High',
          value: 'High',
        },
      ],
    });

    form.appendChild(titleInput);
    form.appendChild(descriptionTextArea);
    form.appendChild(dueDateInput);
    form.appendChild(prioritySelect);
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
        console.group(todoData);
        const { title, description, dueDate, priority } = todoData;
        const todo = createTodo({
          listId,
          title,
          description,
          dueDate: new Date(dueDate),
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

    const cancelButton = CancelButton();

    const addButton = document.createElement('button');
    addButton.innerText = 'Add';
    addButton.type = 'submit';

    container.appendChild(cancelButton);
    container.appendChild(addButton);

    return container;
  }
}

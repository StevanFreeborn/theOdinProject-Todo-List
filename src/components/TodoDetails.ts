import { ids } from '../constants/elements';
import { Priority, Todo } from '../models/todo';
import { listService } from '../services/listService';
import { todoService } from '../services/todoService';
import { formatDateToYYYYMMDD } from '../utils/dates';
import { inlineStyles } from '../utils/styles';
import CheckmarkCircleIcon from './CheckmarkCircleIcon';
import FormTextAreaGroup from './FormTextAreaGroup';
import Link from './Link';

export default function TodoDetails({ todo }: { todo?: Todo }) {
  if (todo === undefined) {
    return Placeholder();
  }

  const container = document.createElement('div');
  container.id = ids.TODO_CARD_DETAILS;
  container.dataset.todoId = todo?.id;

  container.style.cssText = inlineStyles({
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    height: '100%',
    overflow: 'auto',
  });

  container.style.opacity = todo.complete === true ? '50%' : '';

  const breadcrumbContainer = BreadcrumbContainer({ todo });
  const form = Form({ todo });

  container.appendChild(breadcrumbContainer);
  container.appendChild(form);
  return container;
}

function Placeholder() {
  const placeholderContainer = document.createElement('div');
  placeholderContainer.style.cssText = inlineStyles({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
  });

  const placeHolder = document.createElement('div');
  placeHolder.innerText = 'What do you want to get done?';

  placeholderContainer.appendChild(
    CheckmarkCircleIcon({ height: 40, width: 40, fill: 'currentColor' })
  );
  placeholderContainer.appendChild(placeHolder);

  return placeholderContainer;
}

function BreadcrumbContainer({ todo }: { todo: Todo }) {
  const list = listService().getListById({ id: todo.listId });

  const container = document.createElement('div');
  container.style.cssText = inlineStyles({
    padding: '0 0.5rem',
  });

  const breadcrumbLink = Link({
    linkText: `My Lists > ${list ? list.name.toUpperCase() : 'INBOX'}`,
    href: list ? `/lists/${list.id}?todoId=${todo.id}` : `/?todoId=${todo.id}`,
    styles: inlineStyles({
      fontSize: '0.75rem',
    }),
  });

  function handleLinkMouseOver() {
    breadcrumbLink.style.textDecoration = 'underline';
  }

  function handleLinkMouseOut() {
    breadcrumbLink.style.textDecoration = '';
  }

  breadcrumbLink.addEventListener('mouseover', handleLinkMouseOver);
  breadcrumbLink.addEventListener('mouseout', handleLinkMouseOut);

  container.appendChild(breadcrumbLink);

  return container;
}

function Form({ todo }: { todo: Todo }) {
  const form = document.createElement('form');
  form.style.cssText = inlineStyles({
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    flex: '1',
  });

  const titleInput = TitleInput({ todo });
  const dueDateInput = DueDateInput({ todo });
  const prioritySelect = PrioritySelect({ todo });
  const descriptionTextAreaFormGroup = DescriptionTextArea({ todo });

  form.appendChild(titleInput);
  form.appendChild(dueDateInput);
  form.appendChild(prioritySelect);
  form.appendChild(descriptionTextAreaFormGroup);

  function handleSubmit(e: Event) {
    e.preventDefault();
  }

  form.addEventListener('submit', handleSubmit);

  return form;
}

function TitleInput({ todo }: { todo: Todo }) {
  const titleInput = document.createElement('input');
  titleInput.id = 'title';
  titleInput.name = 'title';
  titleInput.type = 'text';
  titleInput.value = todo.title;
  titleInput.title = 'Title';
  titleInput.placeholder = 'Title';
  titleInput.disabled = todo.complete;
  titleInput.style.cssText = inlineStyles({
    fontSize: '1.5rem',
    outline: 'none',
    border: 'none',
    backgroundColor: 'inherit',
    color: '#ffffff',
    borderRadius: '0.25rem',
    padding: '0.25rem 0.5rem',
  });

  function handleChange() {
    todo.title = titleInput.value;
    todoService().updateTodo({ todo });
    document.dispatchEvent(new CustomEvent('todoUpdated'));
  }

  function handleFocus() {
    titleInput.style.backgroundColor = '#2b2a2a';
  }

  function handleBlur() {
    titleInput.style.backgroundColor = 'inherit';
  }

  titleInput.addEventListener('change', handleChange);
  titleInput.addEventListener('focus', handleFocus);
  titleInput.addEventListener('blur', handleBlur);

  return titleInput;
}

function DueDateInput({ todo }: { todo: Todo }) {
  // styles for pseudo elements in index.css
  const dueDateInput = document.createElement('input');
  dueDateInput.id = 'dueDate';
  dueDateInput.name = 'dueDate';
  dueDateInput.type = 'date';
  dueDateInput.value = formatDateToYYYYMMDD({ date: todo.dueDate });
  dueDateInput.title = 'Due Date';
  dueDateInput.disabled = todo.complete;
  dueDateInput.style.cssText = inlineStyles({
    fontSize: '1rem',
    outline: 'none',
    border: 'none',
    backgroundColor: 'inherit',
    color: '#ffffff',
    borderRadius: '0.25rem',
    padding: '0.25rem 0.5rem',
  });

  function handleChange() {
    todo.dueDate = new Date(dueDateInput.value + 'T00:00:00.000');
    todoService().updateTodo({ todo });
  }

  function handleFocus() {
    dueDateInput.style.backgroundColor = '#2b2a2a';
  }

  function handleBlur() {
    dueDateInput.style.backgroundColor = 'inherit';
  }

  dueDateInput.addEventListener('change', handleChange);
  dueDateInput.addEventListener('focus', handleFocus);
  dueDateInput.addEventListener('blur', handleBlur);
  return dueDateInput;
}

function PrioritySelect({ todo }: { todo: Todo }) {
  function getSelectBackground() {
    if (todo.priority === Priority.High) {
      return 'red';
    }

    if (todo.priority === Priority.Medium) {
      return 'yellow';
    }

    return 'green';
  }

  function getSelectColor() {
    return todo.priority === Priority.Medium ? 'black' : '#ffffff';
  }

  const prioritySelect = document.createElement('select');
  prioritySelect.id = 'priority';
  prioritySelect.name = 'priority';
  prioritySelect.title = 'Priority';
  prioritySelect.disabled = todo.complete;
  prioritySelect.style.cssText = inlineStyles({
    marginLeft: '0.5rem',
    padding: '0.25rem',
    border: 'none',
    outline: 'none',
    width: 'min-content',
    backgroundColor: getSelectBackground(),
    color: getSelectColor(),
    fontSize: '0.85rem',
    borderRadius: '0.25rem',
    '-moz-appearance': 'none',
    '-webkit-appearance': 'none',
    textAlign: 'center',
  });

  const priorityOptions = ['Low', 'Medium', 'High'].map(o => {
    const option = document.createElement('option');
    option.value = o;
    option.text = o;
    option.selected = o === todo.priority;
    option.style.cssText = inlineStyles({
      padding: '1rem',
      backgroundColor: '#424242',
      color: '#ffffff',
      fontSize: '0.85rem',
    });
    return option;
  });

  function handleChange() {
    todo.priority = Priority[prioritySelect.value];
    todoService().updateTodo({ todo });
    prioritySelect.style.backgroundColor = getSelectBackground();
    prioritySelect.style.color = getSelectColor();
  }

  function handleFocus() {
    prioritySelect.style.boxShadow = '0px 0px 0px 4px #2b2a2a';
    prioritySelect.style.transition = 'box-shadow 0.3s ease';
  }

  function handleBlur() {
    prioritySelect.style.boxShadow = '';
    prioritySelect.style.transition = '';
  }

  prioritySelect.addEventListener('change', handleChange);
  prioritySelect.addEventListener('focus', handleFocus);
  prioritySelect.addEventListener('blur', handleBlur);

  prioritySelect.append(...priorityOptions);

  return prioritySelect;
}

function DescriptionTextArea({ todo }: { todo: Todo }) {
  const descriptionTextAreaFormGroup = FormTextAreaGroup({
    containerStyles: inlineStyles({
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem',
      fontSize: '1rem',
      height: '100%',
      overflow: 'auto',
    }),
    labelText: 'Description',
    labelStyles: inlineStyles({
      padding: '0 0.5rem',
      textTransform: 'uppercase',
      fontSize: '0.85rem',
      fontWeight: 'bold',
    }),
    textAreaId: 'description',
    textAreaName: 'description',
    textAreaValue: todo.description,
    textAreaStyles: inlineStyles({
      padding: '0.5rem 0.5rem',
      resize: 'none',
      backgroundColor: 'inherit',
      color: '#ffffff',
      border: 'none',
      outline: 'none',
      fontSize: 'inherit',
      borderRadius: '0.25rem',
      height: '100%',
    }),
  });

  const textArea = descriptionTextAreaFormGroup.querySelector('textarea');
  textArea.disabled = todo.complete;

  function handleChange() {
    todo.description = textArea.value;
    todoService().updateTodo({ todo });
  }

  function handleFocus() {
    textArea.style.backgroundColor = '#2b2a2a';
  }

  function handleBlur() {
    textArea.style.backgroundColor = 'inherit';
  }

  textArea.addEventListener('change', handleChange);
  textArea.addEventListener('focus', handleFocus);
  textArea.addEventListener('blur', handleBlur);

  return descriptionTextAreaFormGroup;
}

import { Priority, Todo } from '../models/todo';
import { listService } from '../services/listService';
import { formatDateToYYYYMMDD } from '../utils/dates';
import { inlineStyles } from '../utils/styles';
import CheckmarkCircleIcon from './CheckmarkCircleIcon';
import FormTextAreaGroup from './FormTextAreaGroup';
import Link from './Link';

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

export default function TodoDetails({ todo }: { todo?: Todo }) {
  if (todo === undefined) {
    return Placeholder();
  }

  const list = listService().getListById({ id: todo.listId });

  const container = document.createElement('div');
  container.style.cssText = inlineStyles({
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    height: '100%',
    overflow: 'auto',
  });

  const breadcrumbContainer = document.createElement('div');
  breadcrumbContainer.style.cssText = inlineStyles({
    padding: '0 0.5rem',
  });

  const breadcrumbLink = Link({
    linkText: `My Lists > ${list ? list.name.toUpperCase() : 'INBOX'}`,
    href: list ? `/lists/${list.id}?todoId=${todo.id}` : `/?todoId=${todo.id}`,
    styles: inlineStyles({
      fontSize: '0.75rem',
    }),
  });

  function handleBreadcrumbLinkMouseOver() {
    breadcrumbLink.style.textDecoration = 'underline';
  }

  function handleBreadcrumbLinkMouseOut() {
    breadcrumbLink.style.textDecoration = '';
  }

  breadcrumbLink.addEventListener('mouseover', handleBreadcrumbLinkMouseOver);
  breadcrumbLink.addEventListener('mouseout', handleBreadcrumbLinkMouseOut);

  breadcrumbContainer.appendChild(breadcrumbLink);

  // TODO: Add listeners to input changes to update todos on blur
  const form = document.createElement('form');
  form.style.cssText = inlineStyles({
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    flex: '1',
  });

  const titleInput = document.createElement('input');
  titleInput.id = 'title';
  titleInput.name = 'title';
  titleInput.type = 'text';
  titleInput.value = todo.title;
  titleInput.title = 'Title';
  titleInput.placeholder = 'Title';
  titleInput.style.cssText = inlineStyles({
    fontSize: '1.5rem',
    outline: 'none',
    border: 'none',
    backgroundColor: 'inherit',
    color: '#ffffff',
    borderRadius: '0.25rem',
    padding: '0.25rem 0.5rem',
  });

  function handleInputFocus(e: Event & { target: HTMLInputElement }) {
    e.target.style.backgroundColor = '#2b2a2a';
  }

  function handleInputBlur(e: Event & { target: HTMLInputElement }) {
    e.target.style.backgroundColor = 'inherit';
  }

  titleInput.addEventListener('focus', handleInputFocus);
  titleInput.addEventListener('blur', handleInputBlur);

  // styles for pseudo elements in index.css
  const dueDateInput = document.createElement('input');
  dueDateInput.id = 'dueDate';
  dueDateInput.name = 'dueDate';
  dueDateInput.type = 'date';
  dueDateInput.value = formatDateToYYYYMMDD({ date: todo.dueDate });
  dueDateInput.style.cssText = inlineStyles({
    fontSize: '1rem',
    outline: 'none',
    border: 'none',
    backgroundColor: 'inherit',
    color: '#ffffff',
    borderRadius: '0.25rem',
    padding: '0.25rem 0.5rem',
  });

  dueDateInput.addEventListener('focus', handleInputFocus);
  dueDateInput.addEventListener('blur', handleInputBlur);

  function SelectBackground() {
    if (todo.priority === Priority.High) {
      return 'red';
    }

    if (todo.priority === Priority.Medium) {
      return 'yellow';
    }

    return 'green';
  }

  function SelectColor() {
    return todo.priority === Priority.Medium ? 'black' : '#ffffff';
  }

  const prioritySelect = document.createElement('select');
  prioritySelect.id = 'priority';
  prioritySelect.name = 'priority';
  prioritySelect.style.cssText = inlineStyles({
    marginLeft: '0.5rem',
    padding: '0.25rem',
    border: 'none',
    outline: 'none',
    width: 'min-content',
    backgroundColor: SelectBackground(),
    color: SelectColor(),
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

  function handlePrioritySelectChange() {
    todo.priority = Priority[prioritySelect.value];
    prioritySelect.style.backgroundColor = SelectBackground();
    prioritySelect.style.color = SelectColor();
  }

  function handlePrioritySelectFocus() {
    prioritySelect.style.boxShadow = '0px 0px 0px 4px #2b2a2a';
    prioritySelect.style.transition = 'box-shadow 0.3s ease';
  }

  function handlePrioritySelectBlur() {
    prioritySelect.style.boxShadow = '';
    prioritySelect.style.transition = '';
  }

  prioritySelect.addEventListener('change', handlePrioritySelectChange);
  prioritySelect.addEventListener('focus', handlePrioritySelectFocus);
  prioritySelect.addEventListener('blur', handlePrioritySelectBlur);

  prioritySelect.append(...priorityOptions);

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
    }),
  });

  descriptionTextAreaFormGroup
    .querySelector('textarea')
    .addEventListener('focus', handleInputFocus);
  descriptionTextAreaFormGroup
    .querySelector('textarea')
    .addEventListener('blur', handleInputBlur);

  form.appendChild(titleInput);
  form.appendChild(dueDateInput);
  form.appendChild(prioritySelect);
  form.appendChild(descriptionTextAreaFormGroup);

  container.appendChild(breadcrumbContainer);
  container.appendChild(form);

  return container;
}

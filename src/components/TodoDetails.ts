import { Todo } from '../models/todo';
import { listService } from '../services/listService';
import { inlineStyles } from '../utils/styles';
import CheckmarkCircleIcon from './CheckmarkCircleIcon';
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
  });

  const breadcrumbContainer = document.createElement('div');
  breadcrumbContainer.style.cssText = inlineStyles({
    padding: '0 0.5rem',
  });

  const breadcrumbLink = Link({
    linkText: `My Lists > ${list ? list.name.toUpperCase() : 'INBOX'}`,
    href: '#',
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

  const form = document.createElement('form');

  const titleInput = document.createElement('input');
  titleInput.value = todo.title;
  titleInput.style.cssText = inlineStyles({
    fontSize: '1.5rem',
    outline: 'none',
    border: 'none',
    backgroundColor: 'inherit',
    color: '#ffffff',
    borderRadius: '0.25rem',
    padding: '0.25rem 0.5rem',
    width: '100%',
  });

  function handleTitleInputFocus() {
    titleInput.style.backgroundColor = '#2b2a2a';
  }

  function handleTitleInputBlur() {
    titleInput.style.backgroundColor = 'inherit';
  }

  titleInput.addEventListener('focus', handleTitleInputFocus);
  titleInput.addEventListener('blur', handleTitleInputBlur);

  form.appendChild(titleInput);

  container.appendChild(breadcrumbContainer);
  container.appendChild(form);

  return container;
}

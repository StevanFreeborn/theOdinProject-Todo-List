import { inlineStyles } from '../utils/styles';
import Link from './Link';

export default function ListHeading({
  headingText,
  listId,
}: {
  headingText: string;
  listId?: string;
}) {
  const container = document.createElement('div');
  container.style.cssText = inlineStyles({
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
    padding: '1rem 1.25rem',
    borderRadius: '999px',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.4)',
    backgroundColor: '#424242',
    color: '#ffffff',
    width: 'min-content',
  });

  const heading = document.createElement('h1');
  heading.innerText = headingText;

  container.appendChild(heading);

  container.appendChild(
    Link({
      linkText: 'Add Task',
      href: listId ? `/tasks/add?listId=${listId}` : '/tasks/add',
      styles: inlineStyles({
        padding: '0.25rem 1rem',
        border: '1px solid #ffffff',
        borderRadius: '0.25rem',
        whiteSpace: 'nowrap',
      }),
    })
  );

  function handleContainerMouseOver(e: Event & { target: HTMLElement }) {
    if (e.target.matches('a')) {
      e.target.style.backgroundColor = '#424242';
      e.target.style.color = '#ffffff';
    }
  }

  function handleContainerMouseOut(e: Event & { target: HTMLElement }) {
    if (e.target.matches('a')) {
      e.target.style.backgroundColor = '';
      e.target.style.color = '';
    }
  }

  container.addEventListener('mouseover', handleContainerMouseOver);
  container.addEventListener('mouseout', handleContainerMouseOut);

  return container;
}

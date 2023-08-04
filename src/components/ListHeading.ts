import { inlineStyles } from '../utils/styles';
import Link from './Link';

export default function ListHeading({
  parent,
  headingText,
  listId,
}: {
  parent: HTMLElement;
  headingText: string;
  listId?: string;
}) {
  const linkStyles = inlineStyles({
    padding: '0.25rem 1rem',
    border: '1px solid black',
    borderRadius: '0.25rem',
  });

  const href = listId ? `/tasks/add?listId=${listId}` : '/tasks/add';

  const container = document.createElement('div');
  container.style.cssText = inlineStyles({
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  });

  const heading = document.createElement('h1');
  heading.innerText = headingText;

  container.appendChild(heading);

  container.appendChild(
    Link({
      linkText: 'Add Task',
      href: href,
      styles: linkStyles,
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

  parent.appendChild(container);
}

import { inlineStyles } from '../utils/styles';
import Link from './Link';

export default function ListHeading({
  heading,
  listId,
}: {
  heading: string;
  listId?: string;
}) {
  const containerStyles = inlineStyles({
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  });

  const linkStyles = inlineStyles({
    padding: '0.25rem 1rem',
    border: '1px solid black',
    borderRadius: '0.25rem',
  });

  const href = listId ? `/tasks/add?listId=${listId}` : '/tasks/add';

  return /*html*/ `
    <div style=${containerStyles}>
      <h1>${heading}</h1>
      ${Link({
        linkText: 'Add Task',
        href: href,
        styles: linkStyles,
        onMouseOver: (e, t) => {
          t.style.backgroundColor = '#424242';
          t.style.color = '#ffffff';
        },
        onMouseOut: (e, t) => {
          t.style.backgroundColor = '';
          t.style.color = '';
        },
      })}
    </div>
  `;
}

import { Todo } from '../models/todo';
import { inlineStyles } from '../utils/styles';
import CheckmarkCircleIcon from './CheckmarkCircleIcon';

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

  // TODO: Build actual details view
  const heading = document.createElement('h1');
  heading.innerText = todo.title;

  return heading;
}

import { Todo } from '../models/todo';
import { inlineStyles } from '../utils/styles';
import CheckMarkIcon from './CheckmarkIcon';

export default function TodoCard({ todo }: { todo?: Todo }) {
  const card = document.createElement('div');
  card.style.cssText = inlineStyles({
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    borderRadius: '0.5rem',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.4)',
    backgroundColor: '#424242',
    flex: '1',
  });

  if (todo === undefined) {
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
      CheckMarkIcon({ height: 40, width: 40, fill: 'currentColor' })
    );
    placeholderContainer.appendChild(placeHolder);

    card.appendChild(placeholderContainer);
  }

  return card;
}

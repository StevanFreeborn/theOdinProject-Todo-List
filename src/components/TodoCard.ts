import { inlineStyles } from '../utils/styles';

export default function TodoCard() {
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

  return card;
}

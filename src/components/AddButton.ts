import { inlineStyles } from '../utils/styles';

export default function AddButton() {
  const button = document.createElement('button');
  button.innerText = 'Add';
  button.type = 'submit';
  button.style.cssText = inlineStyles({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #ffffff',
    borderRadius: '0.25rem',
    padding: '0.25rem 1rem',
    color: '#ffffff',
  });

  function handleButtonMouseOver() {
    button.style.backgroundColor = '#2b2a2a';
  }

  function handleButtonMouseOut() {
    button.style.backgroundColor = 'inherit';
  }

  button.addEventListener('mouseover', handleButtonMouseOver);
  button.addEventListener('mouseout', handleButtonMouseOut);

  return button;
}

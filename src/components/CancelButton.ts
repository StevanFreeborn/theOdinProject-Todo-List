export default function CancelButton() {
  const cancelButton = document.createElement('button');
  cancelButton.innerText = 'Cancel';
  cancelButton.type = 'button';

  function handleCancelClick() {
    history.back();
  }

  cancelButton.addEventListener('click', handleCancelClick);

  return cancelButton;
}

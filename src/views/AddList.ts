import { createList } from '../models/list';
import { ViewProps, navigate } from '../router';
import { listService } from '../services/listService';

export default function AddList(props: ViewProps) {
  const FORM_ID = 'addListForm';

  function handleCancelClick() {
    history.back();
  }

  function handleFormSubmit(event: Event & { target: HTMLFormElement }) {
    if (event.target.id !== FORM_ID) {
      return;
    }

    event.preventDefault();
    const { name } = Object.fromEntries(new FormData(event.target));

    if (name instanceof Object) {
      throw Error('name is expected to be a string');
    }

    try {
      const list = createList({ name });
      const { addList } = listService();
      addList({ list });
      document.dispatchEvent(new Event('listsUpdated'));
      document.removeEventListener('submit', handleFormSubmit);
      navigate(`/lists/${list.id}`);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  }

  props.parent.innerHTML = /*html*/ `
    <form id="${FORM_ID}">
      <div>
        <label for="name">Name</label>
        <input type="text" name="name" id="name">
      </div>
      <div>
        <button onclick="(${handleCancelClick})()" type="button">Cancel</button>
        <button type="submit">Add</button>
      </div>     
    </form>
  `;

  document.getElementById(FORM_ID).addEventListener('submit', handleFormSubmit);
}

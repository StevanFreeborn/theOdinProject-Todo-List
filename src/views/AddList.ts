import MyLists from '../components/MyLists';
import { createList } from '../models/list';
import { navigate } from '../router';
import { listService } from '../services/listService';

export default function AddList() {
  const FORM_ID = 'addListForm';

  function handleCancelClick() {
    history.back();
  }

  function handleFormSubmit(event: Event, target: HTMLFormElement) {
    event.preventDefault();
    const { name } = Object.fromEntries(new FormData(target));

    if (name instanceof Object) {
      throw Error('name is expected to be a string');
    }

    const list = createList({ name });
    const { addList } = listService();
    addList({ list });
    // TODO: Is there someway I can avoid doing this?
    document.getElementById('myListsContainer').innerHTML = MyLists();
    navigate(`/lists/${list.id}`);
  }

  document.addEventListener(
    'submit',
    (e: Event & { target: HTMLFormElement }) => {
      if (e.target.id !== FORM_ID) {
        return;
      }
      handleFormSubmit(e, e.target);
    }
  );

  return /*html*/ `
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
}

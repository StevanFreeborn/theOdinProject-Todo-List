import CancelButton from '../components/CancelButton';
import FormInputGroup from '../components/FormInputGroup';
import { ids } from '../constants/elements';
import { createList } from '../models/list';
import { ViewProps, navigate } from '../router';
import { listService } from '../services/listService';

export default function AddList(props: ViewProps) {
  props.parent.appendChild(AddListForm());

  function AddListForm() {
    const form = document.createElement('form');
    form.id = ids.ADD_LIST_FORM;

    const nameInput = FormInputGroup({
      labelText: 'Name',
      inputId: 'name',
      inputName: 'name',
      inputType: 'text',
    });

    form.appendChild(nameInput);
    form.appendChild(Buttons());

    function handleFormSubmit(event: Event & { target: HTMLFormElement }) {
      event.preventDefault();
      const { name } = Object.fromEntries(new FormData(event.target));

      if (name instanceof Object) {
        throw Error('Name is expected to be a string');
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

    form.addEventListener('submit', handleFormSubmit);

    return form;
  }

  function Buttons() {
    const container = document.createElement('div');

    const cancelButton = CancelButton();

    const addButton = document.createElement('button');
    addButton.innerText = 'Add';
    addButton.type = 'submit';

    container.appendChild(cancelButton);
    container.appendChild(addButton);

    return container;
  }
}

import AddButton from '../components/AddButton';
import CancelButton from '../components/CancelButton';
import FormInputGroup from '../components/FormInputGroup';
import { ids } from '../constants/elements';
import { createList } from '../models/list';
import { ViewProps, navigate } from '../router';
import { listService } from '../services/listService';
import { inlineStyles } from '../utils/styles';

export default function AddList(props: ViewProps) {
  props.parent.appendChild(AddListForm());

  function AddListForm() {
    const form = document.createElement('form');
    form.style.cssText = inlineStyles({
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      padding: '1rem',
      borderRadius: '0.5rem',
      boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.4)',
      backgroundColor: '#424242',
      width: 'min-content',
    });
    form.id = ids.ADD_LIST_FORM;

    const nameInputGroup = FormInputGroup({
      containerStyles: inlineStyles({
        display: 'flex',
        flexDirection: 'column',
        gap: '0.25rem',
      }),
      labelText: 'Name',
      labelStyles: inlineStyles({
        color: '#ffffff',
        paddingLeft: '0.25rem',
      }),
      inputId: 'name',
      inputName: 'name',
      inputType: 'text',
      inputStyles: inlineStyles({
        fontSize: '1rem',
        padding: '0.25rem',
        outline: 'none',
        backgroundColor: 'inherit',
        color: '#ffffff',
        border: '1px solid #2b2a2a',
        borderRadius: '0.25rem',
      }),
    });

    const nameInput = nameInputGroup.querySelector('input');

    function handleInputFocus() {
      nameInput.style.backgroundColor = '#2b2a2a';
    }

    function handleInputBlur() {
      nameInput.style.backgroundColor = 'inherit';
    }

    nameInput.addEventListener('focus', handleInputFocus);
    nameInput.addEventListener('blur', handleInputBlur);

    form.appendChild(nameInputGroup);
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
    container.style.cssText = inlineStyles({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem',
      paddingLeft: '0.25rem',
    });

    const cancelButton = CancelButton();
    const addButton = AddButton();

    container.appendChild(cancelButton);
    container.appendChild(addButton);

    return container;
  }
}

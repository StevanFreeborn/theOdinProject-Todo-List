import { Todo } from '../models/todo';
import { inlineStyles } from '../utils/styles';
import ListCardTodo from './ListCardTodo';

export default function ListCard({ todos }: { todos: Todo[] }) {
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

  if (todos.length == 0) {
    const placeHolder = document.createElement('div');
    placeHolder.innerText = 'Looks like you got it all done! 🎉';
    placeHolder.style.cssText = inlineStyles({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
    });
    card.appendChild(placeHolder);
    return card;
  }

  const list = document.createElement('ul');
  list.style.cssText = inlineStyles({
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  });

  const items = todos.map(todo => {
    const item = document.createElement('li');
    item.appendChild(ListCardTodo({ todo }));
    item.id = todo.id;
    return item;
  });

  list.append(...items);

  function handleListClick(e: Event & { target: HTMLElement }) {
    const targetTodo = e.target.closest('li');

    if (targetTodo === null) {
      return;
    }

    const todos = [...list.querySelectorAll('li')];

    for (const todo of todos) {
      if (todo.id !== targetTodo.id) {
        todo.style.cssText = '';
        continue;
      }

      document.dispatchEvent(
        new CustomEvent('todoClick', { detail: { todoId: todo.id } })
      );

      todo.style.cssText = inlineStyles({
        outline: 'none',
        boxShadow: '0px 0px 4px 0px #0093e9',
        transition: 'box-shadow 0.3s ease',
        borderRadius: '0.5rem',
      });
    }
  }

  list.addEventListener('click', handleListClick);

  card.appendChild(list);

  return card;
}

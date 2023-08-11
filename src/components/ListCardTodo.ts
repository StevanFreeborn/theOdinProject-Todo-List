import { Todo } from '../models/todo';
import { todoService } from '../services/todoService';
import { inlineStyles } from '../utils/styles';
import CheckmarkIcon from './CheckmarkIcon';

export default function ListCardTodo({ todo }: { todo: Todo }) {
  const container = document.createElement('div');
  container.style.cssText = inlineStyles({
    display: 'flex',
    padding: '0.5rem 1rem',
    gap: '0.5rem',
    alignItems: 'center',
    borderRadius: '0.5rem',
    cursor: 'pointer',
  });

  function ButtonText() {
    return todo.complete
      ? CheckmarkIcon({ width: 40, height: 40, fill: 'currentColor' })
      : document.createElement('span');
  }

  const button = document.createElement('button');
  button.appendChild(ButtonText());
  button.type = 'button';
  button.style.cssText = inlineStyles({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '1rem',
    aspectRatio: '1',
    borderRadius: '50%',
    border: '1px solid #ffffff',
    color: '#ffffff',
  });

  function SpanStyles() {
    return inlineStyles({
      textDecoration: todo.complete ? 'line-through' : '',
    });
  }

  const span = document.createElement('span');
  span.innerText = todo.title;
  span.style.cssText = SpanStyles();

  container.appendChild(button);
  container.appendChild(span);

  function toggleTodoStatus() {
    if (todo.complete == false) {
      todo.complete = true;
      button.innerHTML = '';
      button.appendChild(ButtonText());
      span.style.cssText = SpanStyles();
      return;
    }

    todo.complete = false;
    button.innerHTML = '';
    button.appendChild(ButtonText());
    span.style.cssText = SpanStyles();
  }

  function handleButtonClick(e: Event) {
    e.stopPropagation();
    toggleTodoStatus();
    todoService().updateTodo({ todo });
    document.dispatchEvent(
      new CustomEvent('todoStatusUpdated', {
        detail: { todoId: todo.id },
      })
    );
    return;
  }

  button.addEventListener('click', handleButtonClick);

  function handleContainerMouseOver() {
    container.style.backgroundColor = '#0093e970';
  }

  function handleContainerMouseOut() {
    container.style.backgroundColor = '';
  }

  container.addEventListener('mouseover', handleContainerMouseOver);
  container.addEventListener('mouseout', handleContainerMouseOut);

  return container;
}

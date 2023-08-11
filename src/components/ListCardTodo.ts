import { ids } from '../constants/elements';
import { Todo } from '../models/todo';
import { todoService } from '../services/todoService';
import { inlineStyles } from '../utils/styles';
import CheckmarkIcon from './CheckmarkIcon';
import TodoDetails from './TodoDetails';
import TrashCanIcon from './TrashCanIcon';

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

  const completeButton = document.createElement('button');
  completeButton.appendChild(ButtonText());
  completeButton.type = 'button';
  completeButton.style.cssText = inlineStyles({
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

  const deleteButton = document.createElement('button');
  deleteButton.appendChild(
    TrashCanIcon({ height: 16, width: 16, fill: 'currentColor' })
  );
  deleteButton.type = 'button';
  deleteButton.style.cssText = inlineStyles({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '1rem',
    aspectRatio: '1',
    color: '#ffffff',
  });

  container.appendChild(completeButton);
  container.appendChild(span);

  if (todo.complete) {
    container.appendChild(deleteButton);
  }

  function handleCompleteButtonClick(e: Event) {
    e.stopPropagation();
    todo.complete = !todo.complete;
    todoService().updateTodo({ todo });
    document.dispatchEvent(new CustomEvent('todoUpdated'));

    const todoCardDetails = document.getElementById(ids.TODO_CARD_DETAILS);

    if (todoCardDetails.dataset === null) {
      return;
    }

    const currentTodoId = todoCardDetails.dataset.todoId;

    if (currentTodoId !== todo.id) {
      return;
    }

    const todoCard = todoCardDetails.parentElement;
    todoCard.innerHTML = '';
    todoCard.appendChild(TodoDetails({ todo }));
  }

  completeButton.addEventListener('click', handleCompleteButtonClick);

  function handleDeleteButtonClick(e: Event) {
    e.stopPropagation();
    todoService().deleteTodoById({ todoId: todo.id });
    document.dispatchEvent(new CustomEvent('todoUpdated'));
    const todoCardDetails = document.getElementById(ids.TODO_CARD_DETAILS);

    if (todoCardDetails.dataset === null) {
      return;
    }

    const currentTodoId = todoCardDetails.dataset.todoId;

    if (currentTodoId !== todo.id) {
      return;
    }

    const todoCard = todoCardDetails.parentElement;
    todoCard.innerHTML = '';
    todoCard.appendChild(TodoDetails({}));
  }

  deleteButton.addEventListener('click', handleDeleteButtonClick);

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

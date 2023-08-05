import ListCard from '../components/ListCard';
import ListHeading from '../components/ListHeading';
import TodoCard from '../components/TodoCard';
import TodoDetails from '../components/TodoDetails';
import { ViewProps } from '../router';
import { listService } from '../services/listService';
import { todoService } from '../services/todoService';
import { inlineStyles } from '../utils/styles';

export default function ListDetail(props: ViewProps) {
  const { id } = props.pathParams;
  const { getListById } = listService();
  const list = getListById({ id });
  const { getTodosByListId, getTodoById } = todoService();
  const todos = getTodosByListId({ listId: list?.id });

  const container = document.createElement('div');
  container.style.cssText = inlineStyles({
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    backgroundColor: '',
    color: '#ffffff',
    height: '100%',
  });

  props.parent.appendChild(container);

  const cardContainer = document.createElement('div');
  cardContainer.style.cssText = inlineStyles({
    display: 'flex',
    gap: '1rem',
    height: '100%',
  });

  cardContainer.appendChild(ListCard({ todos }));

  const todoCard = TodoCard();
  const todoDetails = TodoDetails({});
  todoCard.appendChild(todoDetails);
  cardContainer.appendChild(todoCard);

  function handleTodoClick(e: CustomEvent) {
    const { todoId } = e.detail;
    const todo = getTodoById({ todoId });
    todoCard.innerHTML = '';
    todoCard.appendChild(TodoDetails({ todo }));
  }

  document.addEventListener('todoClick', handleTodoClick);

  container.appendChild(
    ListHeading({
      headingText: list ? list.name : 'Inbox',
      listId: list?.id,
    })
  );

  container.appendChild(cardContainer);

  props.parent.appendChild(container);
}

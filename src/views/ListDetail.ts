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
  const { todoId } = props.queryParams;
  const { getListById } = listService();
  const list = getListById({ id });
  const { getTodoById } = todoService();

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

  function getCardContainerDirection() {
    return window.innerWidth > 1000 ? 'row' : 'column';
  }

  const cardContainer = document.createElement('div');
  cardContainer.style.cssText = inlineStyles({
    display: 'flex',
    flexDirection: getCardContainerDirection(),
    gap: '1rem',
    height: '100%',
  });

  cardContainer.appendChild(ListCard({ listId: list?.id, todoId }));

  const todoCard = TodoCard();
  const todoDetails = TodoDetails({
    todo: getTodoById({ todoId }),
  });

  todoCard.appendChild(todoDetails);
  cardContainer.appendChild(todoCard);
  container.appendChild(
    ListHeading({
      headingText: list ? list.name : 'Inbox',
      listId: list?.id,
    })
  );

  function handleResize() {
    cardContainer.style.flexDirection = getCardContainerDirection();
  }

  window.addEventListener('resize', handleResize);

  container.appendChild(cardContainer);

  props.parent.appendChild(container);
}

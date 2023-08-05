import ListHeading from '../components/ListHeading';
import TodosCard from '../components/TodosCard';
import { ViewProps } from '../router';
import { listService } from '../services/listService';
import { todoService } from '../services/todoService';
import { inlineStyles } from '../utils/styles';

export default function ListDetail(props: ViewProps) {
  const { id } = props.pathParams;
  const { getById } = listService();
  const list = getById({ id });
  const { getTodosByListId } = todoService();
  const todos = getTodosByListId({ listId: list?.id });

  const container = document.createElement('div');
  container.style.cssText = inlineStyles({
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    backgroundColor: '',
    color: '#ffffff',
  });

  props.parent.appendChild(container);

  const cardContainer = document.createElement('div');
  cardContainer.style.cssText = inlineStyles({
    display: 'flex',
    gap: '0.25rem',
  });

  cardContainer.appendChild(TodosCard({ todos }));

  container.appendChild(
    ListHeading({
      headingText: list ? list.name : 'Inbox',
      listId: list?.id,
    })
  );

  container.appendChild(cardContainer);

  props.parent.appendChild(container);
}

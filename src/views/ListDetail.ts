import ListHeading from '../components/ListHeading';
import { ViewProps } from '../router';
import { listService } from '../services/listService';
import { todoService } from '../services/todoService';

export default function ListDetail(props: ViewProps) {
  const { id } = props.pathParams;
  const { getById } = listService();
  const list = getById({ id });

  function renderTodos() {
    const { getTodosByListId } = todoService();
    const todos = getTodosByListId({ listId: list?.id });
    return /*html*/ `
      <ul>
        ${todos
          .map(
            t => /*html*/ `
              <li>${t.title}</li>
            `
          )
          .join('')}
      </ul>
    `;
  }

  ListHeading({
    parent: props.parent,
    headingText: list ? list.name : 'Inbox',
    listId: list?.id,
  });
}

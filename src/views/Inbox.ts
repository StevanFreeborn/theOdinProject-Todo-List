import ListHeading from '../components/ListHeading';
import { todoService } from '../services/todoService';

export default function Inbox() {
  function renderTodos() {
    const { getInboxTodos } = todoService();
    const todos = getInboxTodos();
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

  return /*html*/ `
    ${ListHeading({ heading: 'Inbox' })}
    <div>
      ${renderTodos()}
    </div>
  `;
}

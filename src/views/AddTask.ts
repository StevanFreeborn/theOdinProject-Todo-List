import { Priority, createTodo } from '../models/todo';
import { ViewProps, navigate } from '../router';
import { todoService } from '../services/todoService';
import { camelCaseToTitleCase } from '../utils/strings';

export default function AddTask(props: ViewProps) {
  const { listId } = props.queryParams;

  const FORM_ID = 'addTaskForm';

  function handleCancelClick() {
    history.back();
  }

  function handleFormSubmit(event: Event & { target: HTMLFormElement }) {
    if (event.target.id !== FORM_ID) {
      return;
    }

    event.preventDefault();
    const todoData = {} as { [key: string]: string };

    for (const [key, value] of new FormData(event.target).entries()) {
      if (value instanceof Object) {
        throw Error(
          `${camelCaseToTitleCase({ str: key })} is expected to be a string`
        );
      }
      todoData[key] = value;
    }

    try {
      const { title, description, dueDate, priority } = todoData;
      const todo = createTodo({
        listId,
        title,
        description,
        dueDate: new Date(dueDate),
        priority: Priority[priority],
      });
      const { addTodo } = todoService();
      addTodo({ todo });
      document.removeEventListener('submit', handleFormSubmit);
      const returnUrl = listId ? `/lists/${listId}` : '/';
      navigate(returnUrl);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  }

  document.addEventListener('submit', handleFormSubmit);

  return /*html*/ `
    <h1>Add Task</h1>
    <form id="${FORM_ID}">
      <div>
        <label for="title">Title</label>
        <input type="text" name="title" id="title">
      </div>
      <div>
        <label for="description">Description</label>
        <textarea name="description" id="description"></textarea>
      </div>
      <div>
        <label for="dueDate">Due Date</label>
        <input type="date" name="dueDate" id="dueDate">
      </div>
      <div>
        <label for="priority">Priority</label>
        <select name="priority" id="priority">
          <option selected disabled>Select a priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div>
        <button onclick="(${handleCancelClick})()" type="button">Cancel</button>
        <button type="submit">Add</button>
      </div>     
    </form>
  `;
}

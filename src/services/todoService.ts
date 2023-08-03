import { context } from '../data/context';
import { Todo } from '../models/todo';

export function todoService() {
  const _context = context();

  function addTodo({ todo }: { todo: Todo }) {
    _context.todos.add({ todo });
  }

  return {
    addTodo,
  };
}

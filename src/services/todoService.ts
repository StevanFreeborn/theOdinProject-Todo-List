import { context } from '../data/context';
import { Todo } from '../models/todo';

export function todoService() {
  const _context = context();

  function addTodo({ todo }: { todo: Todo }) {
    _context.todos.add({ todo });
  }

  function getInboxTodos() {
    return _context.todos.findMany(t => t.listId === undefined);
  }

  function getTodosByListId({ listId }: { listId: string }) {
    return _context.todos.findMany(t => t.listId === listId);
  }

  return {
    addTodo,
    getInboxTodos,
    getTodosByListId,
  };
}

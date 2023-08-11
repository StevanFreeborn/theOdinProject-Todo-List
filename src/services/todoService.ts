import { context } from '../data/context';
import { Todo } from '../models/todo';

export function todoService() {
  const _context = context();

  function updateTodo({ todo }: { todo: Todo }) {
    _context.todos.findAndReplace(t => t.id === todo.id, todo);
  }

  function addTodo({ todo }: { todo: Todo }) {
    _context.todos.add({ todo });
  }

  function getInboxTodos() {
    return _context.todos.findMany(t => t.listId === undefined);
  }

  function getTodosByListId({ listId }: { listId: string }) {
    return _context.todos.findMany(t => t.listId === listId);
  }

  function getTodoById({ todoId }: { todoId: string }) {
    return _context.todos.find(t => t.id === todoId);
  }

  function deleteTodoById({ todoId }: { todoId: string }) {
    _context.todos.findAndRemove(t => t.id === todoId);
  }

  return {
    addTodo,
    getInboxTodos,
    getTodosByListId,
    updateTodo,
    getTodoById,
    deleteTodoById,
  };
}

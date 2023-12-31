import { List } from '../models/list';
import { Todo } from '../models/todo';

export function context() {
  const LISTS_KEY = 'lists';
  const TODOS_KEY = 'todos';

  function getItem({ key }: { key: string }) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function reviver(key: string, value: any) {
      if (key === 'dueDate' && typeof value === 'string') {
        return new Date(value);
      }

      return value;
    }

    return JSON.parse(localStorage.getItem(key), reviver);
  }

  function setItem({ key, item }: { key: string; item: object }) {
    localStorage.setItem(key, JSON.stringify(item));
  }

  let _lists: List[] = getItem({ key: LISTS_KEY });
  let _todos: Todo[] = getItem({ key: TODOS_KEY });

  if (_lists == null) {
    setItem({ key: LISTS_KEY, item: [] });
    _lists = getItem({ key: LISTS_KEY });
  }

  if (_todos == null) {
    setItem({ key: TODOS_KEY, item: [] });
    _todos = getItem({ key: TODOS_KEY });
  }

  return {
    get lists() {
      return {
        add: ({ list }: { list: List }) => {
          _lists.push(list);
          setItem({ key: LISTS_KEY, item: _lists });
        },
        findOne: (predicate: (list: List) => boolean) => {
          return _lists.find(predicate);
        },
        findMany: (predicate: (list: List) => boolean) => {
          return _lists.filter(predicate);
        },
      };
    },
    get todos() {
      return {
        add: ({ todo }: { todo: Todo }) => {
          _todos.push(todo);
          setItem({ key: TODOS_KEY, item: _todos });
        },
        find: (predicate: (todo: Todo) => boolean) => {
          return _todos.find(predicate);
        },
        findMany: (predicate: (todo: Todo) => boolean) => {
          return _todos.filter(predicate);
        },
        findAndReplace: (predicate: (todo: Todo) => boolean, todo: Todo) => {
          const index = _todos.findIndex(predicate);

          if (index === -1) {
            return;
          }

          _todos[index] = todo;
          setItem({ key: TODOS_KEY, item: _todos });
        },
        findAndRemove: (predicate: (todo: Todo) => boolean) => {
          const index = _todos.findIndex(predicate);

          if (index === -1) {
            return;
          }

          _todos.splice(index, 1);
          setItem({ key: TODOS_KEY, item: _todos });
        },
      };
    },
  };
}

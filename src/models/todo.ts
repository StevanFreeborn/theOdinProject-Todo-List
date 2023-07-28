type TodoParams = {
  title: string;
  description: string;
  dueDate: Date;
  priority: 'High' | 'Medium' | 'Low';
};

type Todo = TodoParams;

export function createTodo({
  title,
  description,
  dueDate,
  priority,
}: TodoParams): Todo {
  const _title = title;
  const _description = description;
  const _dueDate = dueDate;
  const _priority = priority;

  return {
    get title() {
      return _title;
    },
    get description() {
      return _description;
    },
    get dueDate() {
      return _dueDate;
    },
    get priority() {
      return _priority;
    },
  };
}

import { isNullOrWhiteSpace } from '../utils/strings';

enum Priority {
  High = 'High',
  Medium = 'Medium',
  Low = 'Low',
}

type TodoParams = {
  title: string;
  description: string;
  dueDate: Date;
  priority: Priority;
};

type Todo = TodoParams;

export function createTodo({
  title,
  description,
  dueDate,
  priority,
}: TodoParams): Todo {
  function validateTitle({ title }: { title: string }) {
    if (isNullOrWhiteSpace({ str: title })) {
      throw new Error('Title is required');
    }

    if (title.length > 150) {
      throw new Error('Title cannot be longer than 255 characters');
    }

    return title;
  }

  function validateDescription({ description }: { description: string }) {
    if (description.length > 150) {
      throw new Error('Title cannot be longer than 255 characters');
    }

    return description;
  }

  function validateDueDate({ dueDate }: { dueDate: Date }) {
    return dueDate;
  }

  function validatePriority({ priority }: { priority: string }): Priority {
    const priorityEnum = Priority[priority];

    if (priorityEnum === undefined) {
      throw new Error('Priority must be High, Medium, or Low');
    }

    return priorityEnum;
  }

  let _title = validateTitle({ title });
  let _description = validateDescription({ description });
  let _dueDate = validateDueDate({ dueDate });
  let _priority = validatePriority({ priority });

  return {
    get title() {
      return _title;
    },
    set title(title) {
      _title = validateTitle({ title });
    },
    get description() {
      return _description;
    },
    set description(description) {
      _description = validateDescription({ description });
    },
    get dueDate() {
      return _dueDate;
    },
    set dueDate(dueDate) {
      _dueDate = validateDueDate({ dueDate });
    },
    get priority() {
      return _priority;
    },
    set priority(priority) {
      _priority = validatePriority({ priority });
    },
  };
}

import { generateId } from '../utils/id';
import { isNullOrWhiteSpace } from '../utils/strings';

export enum Priority {
  High = 'High',
  Medium = 'Medium',
  Low = 'Low',
}

type TodoParams = {
  listId?: string;
  title: string;
  description: string;
  dueDate: Date;
  priority: Priority;
};

export type Todo = { id: string } & TodoParams;

export function createTodo({
  listId,
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
      throw new Error('Title cannot be longer than 150 characters');
    }

    return title;
  }

  function validateDescription({ description }: { description: string }) {
    if (description.length > 255) {
      throw new Error('Description cannot be longer than 255 characters');
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

  let _listId = listId;
  const _id = generateId();
  let _title = validateTitle({ title });
  let _description = validateDescription({ description });
  let _dueDate = validateDueDate({ dueDate });
  let _priority = validatePriority({ priority });

  return {
    get listId() {
      return _listId;
    },
    set listId(listId) {
      _listId = listId;
    },
    get id() {
      return _id;
    },
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

import { generateId } from '../utils/id';
import { isNullOrWhiteSpace } from '../utils/strings';

type ListParams = {
  name: string;
};

export type List = { id: string } & ListParams;

export function createList({ name }: ListParams): List {
  function validateName({ name }: { name: string }) {
    if (isNullOrWhiteSpace({ str: name })) {
      throw new Error('Name is required');
    }

    if (name.length > 150) {
      throw new Error('Name cannot be longer than 150 characters');
    }

    return name;
  }

  const _id = generateId();
  let _name = validateName({ name });

  return {
    get id() {
      return _id;
    },
    get name() {
      return _name;
    },
    set name(name) {
      _name = validateName({ name });
    },
  };
}

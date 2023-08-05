import { context } from '../data/context';
import { List } from '../models/list';

export function listService() {
  const _context = context();

  function addList({ list }: { list: List }) {
    const existingList = _context.lists.findOne(l => l.name === list.name);

    if (existingList !== undefined) {
      throw Error(`A list already exists with the name ${list.name}`);
    }

    _context.lists.add({ list });
  }

  function getListById({ id }: { id: string }) {
    return _context.lists.findOne(l => l.id === id);
  }

  function getAllLists() {
    return _context.lists.findMany(l => l !== null);
  }

  return {
    addList,
    getListById,
    getAllLists,
  };
}

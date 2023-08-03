import { ViewProps } from '../router';
import { listService } from '../services/listService';

export default function ListDetail(props: ViewProps) {
  const { id } = props.pathParams;
  const { getById } = listService();
  const list = getById({ id });

  return /*html*/ `
    <h1>${list.name}</h1>
  `;
}

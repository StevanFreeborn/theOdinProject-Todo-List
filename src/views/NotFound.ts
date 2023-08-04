import { ViewProps } from '../router';

export default function NotFound(props: ViewProps) {
  props.parent.innerHTML = /*html*/ `
    <h1>Not Found</h1>
  `;
}

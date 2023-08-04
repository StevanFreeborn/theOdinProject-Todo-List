import { ViewProps } from '../router';

export default function MyDay(props: ViewProps) {
  props.parent.innerHTML = /*html*/ `
    <h1>My Day</h1>
  `;
}

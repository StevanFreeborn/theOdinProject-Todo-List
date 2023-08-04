import { ViewProps } from '../router';

export default function NextWeek(props: ViewProps) {
  props.parent.innerHTML = /*html*/ `
    <h1>Next 7 Days</h1>
  `;
}

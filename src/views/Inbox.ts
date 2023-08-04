import { ViewProps } from './../router';
export default function Inbox(props: ViewProps) {
  props.parent.innerHTML = /*html*/ `
    <h1>Inbox</h1>
  `;
}

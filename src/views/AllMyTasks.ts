import { ViewProps } from './../router';
export default function AllMyTasks(props: ViewProps) {
  props.parent.innerHTML = /*html*/ `
    <h1>All My Tasks</h1>
  `;
}

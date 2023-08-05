import { ViewProps } from './../router';
export default function AllMyTasks(props: ViewProps) {
  const heading = document.createElement('h1');
  heading.innerText = 'All My Tasks';

  props.parent.appendChild(heading);
}

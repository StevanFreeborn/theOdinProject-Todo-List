import { ViewProps } from '../router';

export default function MyDay(props: ViewProps) {
  const heading = document.createElement('h1');
  heading.innerText = 'My Day';

  props.parent.appendChild(heading);
}

import { ViewProps } from '../router';

export default function NextWeek(props: ViewProps) {
  const heading = document.createElement('h1');
  heading.innerText = 'Next 7 Days';

  props.parent.appendChild(heading);
}

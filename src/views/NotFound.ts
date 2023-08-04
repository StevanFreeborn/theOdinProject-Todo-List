import { ViewProps } from '../router';

export default function NotFound(props: ViewProps) {
  const heading = document.createElement('h1');
  heading.innerText = 'Not Found';

  props.parent.appendChild(heading);
}

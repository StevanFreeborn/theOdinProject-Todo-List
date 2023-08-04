import SideBar from './components/Sidebar';
import { inlineStyles } from './utils/styles';

export default function Layout({ parent }: { parent: HTMLElement }) {
  const main = document.createElement('main');
  main.id = 'app';
  main.style.cssText = inlineStyles({
    flex: '1',
    padding: '1rem',
  });

  const divContainer = document.createElement('div');
  divContainer.style.cssText = inlineStyles({
    height: '100%',
    display: 'flex',
  });

  SideBar({ parent: divContainer });
  divContainer.appendChild(main);

  parent.appendChild(divContainer);
}

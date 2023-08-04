import SideBar from './components/Sidebar';
import { inlineStyles } from './utils/styles';

export default function Layout() {
  const main = document.createElement('main');
  main.id = 'app';
  main.style.cssText = inlineStyles({
    flex: '1',
    padding: '1rem',
  });

  const container = document.createElement('div');
  container.style.cssText = inlineStyles({
    height: '100%',
    display: 'flex',
  });

  container.appendChild(SideBar());
  container.appendChild(main);

  return container;
}

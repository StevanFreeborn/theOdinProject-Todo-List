import SideBar from './components/Sidebar';
import { inlineStyles } from './utils/styles';

export default function Layout() {
  const main = document.createElement('main');
  main.id = 'app';
  main.style.cssText = inlineStyles({
    flex: '1',
    padding: '1rem',
    backgroundColor: '#0093E9',
    backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
    boxShadow: 'inset 0px 4px 8px rgba(0, 0, 0, 0.1)',
    border: '1px solid #0093E9',
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

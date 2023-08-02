import SideBar from './components/Sidebar';
import { inlineStyles } from './utils/styles';

export default function Layout() {
  const containerStyles = inlineStyles({
    height: '100%',
    display: 'flex',
  });

  const mainStyles = inlineStyles({
    flex: '85%',
    padding: '1rem',
  });

  return /*html*/ `
    <div style="${containerStyles}">
      ${SideBar()}
      <main id="app" style="${mainStyles}"></main>
    </div>
  `;
}

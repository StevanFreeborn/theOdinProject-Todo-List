import SideBar from './components/Sidebar.js';
import { inlineStyles } from './utils/styles.js';

export default function Layout() {
  const containerStyles = inlineStyles({
    height: '100%',
    display: 'flex',
  });

  const mainStyles = inlineStyles({
    flex: '85%',
  });

  return /*html*/ `
    <div style="${containerStyles}">
      ${SideBar()}
      <main id="app" style="${mainStyles}"></main>
    </div>
  `;
}

import { inlineStyles } from '../utils/styles.js';

export default function SideBar() {
  const asideStyles = inlineStyles({
    flex: '15%',
    backgroundColor: '#0093E9',
    backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
  });

  const navStyles = inlineStyles({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  });

  const navListStyles = inlineStyles({});

  const navListItemStyles = inlineStyles({
    padding: '0.25rem 1rem',
  });

  const navListItemMouseOver = (e: Event & { target: HTMLLIElement }) => {
    e.target.style.backgroundColor = 'red';
  };

  const navLinkStyles = inlineStyles({});

  return /*html*/ `
    <aside style="${asideStyles}">
      <nav style="${navStyles}">
        <ul style="${navListStyles}">
          <li onmouseover="${navListItemMouseOver}()" style="${navListItemStyles}">
            <a href="#">My Day</a>
          </li>
          <li style="${navListItemStyles}">
            <a href="#" style="${navLinkStyles}>Next 7 Days</a>
          </li>
          <li style="${navListItemStyles}">
            <a href="#" style="${navLinkStyles}">All my tasks</a>
          </li>
        </ul>
        <ul style="${navListStyles}">
          <li style="${navListItemStyles}">
            <div>Lists</div>
            <ul style="${navListStyles}">
              <li style="${navListItemStyles}">
                <a href="#" style="${navLinkStyles}">Inbox</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>`;
}

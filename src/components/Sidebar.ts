import { inlineStyles } from '../utils/styles';

function NavListItem({ linkText, href }: { linkText: string; href: string }) {
  const navListItemStyles = inlineStyles({
    padding: '0.25rem 1rem',
  });

  const navListItemMouseOver = (e: HTMLElement) => {
    e.style.backgroundColor = '#424242';
  };

  const navListItemMouseOut = (e: HTMLElement) => {
    e.style.backgroundColor = '';
  };

  const navLinkStyles = inlineStyles({
    color: '#ffffff',
    whiteSpace: 'nowrap',
  });

  return /*html*/ `
    <a href="${href}" style="${navLinkStyles}" data-link>
      <li 
        onmouseover="(${navListItemMouseOver})(this)" 
        onmouseout="(${navListItemMouseOut})(this)" 
        style="${navListItemStyles}"
      >
        ${linkText}
      </li>
    </a>
  `;
}

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
    padding: '1rem 0rem',
  });

  const navListTitleStyles = inlineStyles({
    padding: '0rem 1rem',
    fontSize: '1.15rem',
    color: '#ffffff',
    fontWeight: 'bold',
  });

  const navListStyles = inlineStyles({
    display: 'flex',
    flexDirection: 'column',
  });

  const primaryNavLinkItems = [
    { linkText: 'My Day', href: '#' },
    { linkText: 'Next 7 Days', href: '#' },
    { linkText: 'All my tasks', href: '#' },
  ];

  const secondaryNavLinkItems = [{ linkText: 'Inbox', href: '#' }];

  return /*html*/ `
    <aside style="${asideStyles}">
      <nav style="${navStyles}">
        <ul style="${navListStyles}">
          ${primaryNavLinkItems
            .map(item =>
              NavListItem({ linkText: item.linkText, href: item.href })
            )
            .join('')}
        </ul>
        <div>
          <div style="${navListTitleStyles}">My lists</div>
          <ul style="${navListStyles}">
          ${secondaryNavLinkItems
            .map(item =>
              NavListItem({ linkText: item.linkText, href: item.href })
            )
            .join('')}
          </ul>
        </div
      </nav>
    </aside>`;
}

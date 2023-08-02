import { inlineStyles } from '../utils/styles';
import Link from './Link';

function NavListItem({ linkText, href }: { linkText: string; href: string }) {
  const navListItemMouseOver = (e: HTMLElement) => {
    e.style.backgroundColor = '#424242';
  };

  const navListItemMouseOut = (e: HTMLElement) => {
    e.style.backgroundColor = '';
  };

  const navLinkStyles = inlineStyles({
    color: '#ffffff',
    whiteSpace: 'nowrap',
    width: '100%',
    display: 'flex',
    padding: '0.25rem 1rem',
  });

  return /*html*/ `
    <li 
      onmouseover="(${navListItemMouseOver})(this)" 
      onmouseout="(${navListItemMouseOut})(this)" 
      
    >
      ${Link({ linkText, href, styles: navLinkStyles })}
    </li>
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

  const navListTitleContainer = inlineStyles({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0rem 1rem',
    color: '#ffffff',
  });

  const navListTitleStyles = inlineStyles({
    fontSize: '1.15rem',
    fontWeight: 'bold',
  });

  const addListLinkStyles = inlineStyles({
    fontSize: '1.25rem',
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
          <div style="${navListTitleContainer}">
            <div style="${navListTitleStyles}">My lists</div>
            ${Link({
              linkText: '+',
              href: '/lists/add',
              styles: addListLinkStyles,
              onMouseOver: (e, t) => (t.style.color = '#424242'),
              onMouseOut: (e, t) => (t.style.color = ''),
            })}
          </div>
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

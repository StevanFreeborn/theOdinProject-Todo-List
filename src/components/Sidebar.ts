import { inlineStyles } from '../utils/styles';
import Link from './Link';
import MyLists from './MyLists';

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

export default function SideBar({ parent }: { parent: HTMLElement }) {
  const navStyles = inlineStyles({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    padding: '1rem 0rem',
  });

  const navListStyles = inlineStyles({
    display: 'flex',
    flexDirection: 'column',
  });

  const now = new Date();
  const sevenDaysLater = new Date(now);
  sevenDaysLater.setDate(now.getDate() + 7);

  const primaryNavLinkItems = [
    { linkText: 'Inbox', href: '/' },
    { linkText: 'My Day', href: '/my-day' },
    {
      linkText: 'Next 7 Days',
      href: `/next-seven-days`,
    },
    { linkText: 'All my tasks', href: '/tasks' },
  ];

  const aside = document.createElement('aside');
  aside.style.cssText = inlineStyles({
    width: '200px',
    backgroundColor: '#0093E9',
    backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
  });
  aside.innerHTML = /*html*/ `
    <nav style="${navStyles}">
      <ul style="${navListStyles}">
        ${primaryNavLinkItems
          .map(item =>
            NavListItem({ linkText: item.linkText, href: item.href })
          )
          .join('')}
      </ul>
      <div id="myListsContainer">
        ${MyLists()}
      </div>
    </nav>
  `;

  parent.appendChild(aside);
}

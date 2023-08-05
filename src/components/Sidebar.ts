import { ids } from '../constants/elements';
import { inlineStyles } from '../utils/styles';
import MyLists from './MyLists';
import NavListItem from './NavListItem';

export default function SideBar() {
  const primaryNavLinkItems = [
    { linkText: 'Inbox', href: '/' },
    { linkText: 'My Day', href: '/my-day' },
    {
      linkText: 'Next 7 Days',
      href: `/next-seven-days`,
    },
    { linkText: 'All my tasks', href: '/tasks' },
  ];

  const aside = Aside();
  aside.appendChild(Nav());
  aside.appendChild(MyLists());
  return aside;

  function Aside() {
    const aside = document.createElement('aside');
    aside.style.cssText = inlineStyles({
      width: '200px',
      backgroundColor: '#424242',
      overflow: 'auto',
    });

    return aside;
  }

  function Nav() {
    const nav = document.createElement('nav');
    nav.style.cssText = inlineStyles({
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      padding: '1rem 0rem',
    });

    const navList = NavList();
    nav.appendChild(navList);

    return nav;
  }

  function NavList() {
    const navList = document.createElement('ul');
    navList.id = ids.PRIMARY_NAV_LIST;
    navList.style.cssText = inlineStyles({
      display: 'flex',
      flexDirection: 'column',
    });

    const items = primaryNavLinkItems.map(item =>
      NavListItem({
        linkText: item.linkText,
        href: item.href,
      })
    );

    navList.append(...items);

    function handleNavListMouseOver(e: Event & { target: HTMLElement }) {
      if (e.target.matches('a')) {
        e.target.style.backgroundColor = '#0093E9';
      }
    }

    function handleNavListMouseOut(e: Event & { target: HTMLElement }) {
      if (e.target.matches('a')) {
        e.target.style.backgroundColor = '';
      }
    }

    navList.addEventListener('mouseover', handleNavListMouseOver);
    navList.addEventListener('mouseout', handleNavListMouseOut);

    return navList;
  }
}

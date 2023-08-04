import { ids } from '../constants/elements';
import { inlineStyles } from '../utils/styles';
import MyLists from './MyLists';
import NavListItem from './NavListItem';

export default function SideBar({ parent }: { parent: HTMLElement }) {
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
  MyLists({ parent: aside });
  parent.appendChild(aside);

  function Aside() {
    const aside = document.createElement('aside');
    aside.style.cssText = inlineStyles({
      width: '200px',
      backgroundColor: '#0093E9',
      backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
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

    primaryNavLinkItems.forEach(item => {
      NavListItem({
        parent: navList,
        linkText: item.linkText,
        href: item.href,
      });
    });

    function handleNavListMouseOver(e: Event & { target: HTMLElement }) {
      if (e.target.matches('a')) {
        e.target.style.backgroundColor = '#424242';
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

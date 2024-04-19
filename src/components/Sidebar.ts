import { ids } from '../constants/elements';
import { inlineStyles } from '../utils/styles';
import HamburgerIcon from './HamburgerIcon';
import MyLists from './MyLists';
import NavListItem from './NavListItem';

export default function SideBar() {
  const primaryNavLinkItems = [
    { linkText: 'Inbox', href: '/' },
  ];

  const aside = Aside();
  const navHeader = NavHeader();
  const navHeading = navHeader.querySelector(
    `#${ids.NAV_HEADING}`
  ) as HTMLHeadingElement;
  const nav = Nav();
  const myLists = MyLists();
  myLists.style.transition = 'transform 0.3s ease-in-out';

  function hideSidebar() {
    aside.style.width = '40px';
    navHeader.style.justifyContent = 'center';
    navHeading.style.transform = 'scaleX(0)';
    nav.style.transform = 'scaleX(0)';
    myLists.style.transform = 'scaleX(0)';

    function hideElement(e: Event & { target: HTMLElement }) {
      e.target.style.display = 'none';
      e.target.removeEventListener('transitionend', hideElement);
    }

    navHeading.addEventListener('transitionend', hideElement);
    nav.addEventListener('transitionend', hideElement);
    myLists.addEventListener('transitionend', hideElement);
  }

  function showSidebar() {
    aside.style.width = '200px';
    navHeader.style.justifyContent = 'space-between';
    navHeading.style.display = '';
    nav.style.display = '';
    myLists.style.display = '';
    navHeading.style.transform = 'scaleX(1)';
    nav.style.transform = 'scaleX(1)';
    myLists.style.transform = 'scaleX(1)';
  }

  function handleToggleButtonClick(e: Event & { target: HTMLButtonElement }) {
    const button = e.target.closest('button');
    if (button === null || button.id !== ids.TOGGLE_SIDEBAR_BUTTON) {
      return;
    }

    aside.style.width === '200px' ? hideSidebar() : showSidebar();
  }

  navHeader.addEventListener('click', handleToggleButtonClick);

  if (window.innerWidth < 1000) {
    aside.style.width = '40px';
    navHeader.style.justifyContent = 'center';
    navHeading.style.display = 'none';
    nav.style.display = 'none';
    myLists.style.display = 'none';
  }

  aside.appendChild(navHeader);
  aside.appendChild(nav);
  aside.appendChild(myLists);

  return aside;

  function Aside() {
    const aside = document.createElement('aside');
    aside.style.cssText = inlineStyles({
      width: '200px',
      backgroundColor: '#424242',
      overflow: 'auto',
      transition: 'width 0.3s ease-in-out',
    });

    return aside;
  }

  function NavHeader() {
    const container = document.createElement('div');
    container.style.cssText = inlineStyles({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem',
      color: '#ffffff',
    });

    const heading = document.createElement('div');
    heading.id = ids.NAV_HEADING;
    heading.innerText = 'Get It Done';
    heading.style.cssText = inlineStyles({
      fontWeight: 'bold',
      fontSize: '1.5rem',
      transition: 'transform 0.3s ease-in-out',
      whiteSpace: 'nowrap',
    });

    const toggleButton = document.createElement('button');
    toggleButton.id = ids.TOGGLE_SIDEBAR_BUTTON;
    toggleButton.type = 'button';
    toggleButton.style.cssText = inlineStyles({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff',
    });
    toggleButton.appendChild(
      HamburgerIcon({ width: 20, height: 20, fill: 'currentColor' })
    );

    container.appendChild(heading);
    container.appendChild(toggleButton);

    return container;
  }

  function Nav() {
    const nav = document.createElement('nav');
    nav.style.cssText = inlineStyles({
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      padding: '1rem 0rem',
      transition: 'transform 0.3s ease-in-out',
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

import { ids } from '../constants/elements';
import { listService } from '../services/listService';
import { inlineStyles } from '../utils/styles';
import Link from './Link';
import NavListItem from './NavListItem';

export default function MyLists() {
  const container = MyListContainer();
  container.append(MyListTitle());
  container.append(List());
  return container;

  function MyListContainer() {
    const myListContainer = document.createElement('div');
    myListContainer.id = ids.MY_LISTS_CONTAINER;

    return myListContainer;
  }

  function MyListTitle() {
    const container = document.createElement('div');
    container.style.cssText = inlineStyles({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0rem 1rem',
      color: '#ffffff',
    });

    const title = document.createElement('div');
    title.innerText = 'My Lists';
    title.style.cssText = inlineStyles({
      fontSize: '1.15rem',
      fontWeight: 'bold',
    });

    const addListLinkStyles = inlineStyles({
      fontSize: '1.25rem',
      fontWeight: 'bold',
    });

    container.appendChild(title);

    container.appendChild(
      Link({
        linkText: '+',
        href: '/lists/add',
        styles: addListLinkStyles,
      })
    );

    function handleContainerMouseOver(e: Event & { target: HTMLElement }) {
      if (e.target.matches('a')) {
        e.target.style.color = '#424242';
      }
    }

    function handleContainerMouseOut(e: Event & { target: HTMLElement }) {
      if (e.target.matches('a')) {
        e.target.style.color = '';
      }
    }

    container.addEventListener('mouseover', handleContainerMouseOver);
    container.addEventListener('mouseout', handleContainerMouseOut);

    return container;
  }

  function List() {
    function renderNavLinkItems() {
      const { getAllLists } = listService();
      const allLists = getAllLists();
      const myListItems = allLists.map(list => ({
        linkText: list.name,
        href: `/lists/${list.id}`,
      }));

      list.innerHTML = '';

      myListItems.forEach(item =>
        list.appendChild(
          NavListItem({ linkText: item.linkText, href: item.href })
        )
      );
    }

    const list = document.createElement('ul');
    list.id = ids.MY_LISTS;
    list.style.cssText = inlineStyles({
      display: 'flex',
      flexDirection: 'column',
    });

    renderNavLinkItems();

    function handleListUpdated() {
      renderNavLinkItems();
    }

    function handleMyListMouseOver(e: Event & { target: HTMLElement }) {
      if (e.target.matches('a')) {
        e.target.style.backgroundColor = '#424242';
      }
    }

    function handleMyListMouseOut(e: Event & { target: HTMLElement }) {
      if (e.target.matches('a')) {
        e.target.style.backgroundColor = '';
      }
    }

    document.addEventListener('listsUpdated', handleListUpdated);
    list.addEventListener('mouseover', handleMyListMouseOver);
    list.addEventListener('mouseout', handleMyListMouseOut);

    return list;
  }
}

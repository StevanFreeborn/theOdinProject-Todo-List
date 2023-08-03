import { listService } from '../services/listService';
import { inlineStyles } from '../utils/styles';
import Link from './Link';
import NavListItem from './NavListItem';

export default function MyLists() {
  const myListStyles = inlineStyles({
    display: 'flex',
    flexDirection: 'column',
  });

  const myListTitleContainer = inlineStyles({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0rem 1rem',
    color: '#ffffff',
  });

  const myListTitleStyles = inlineStyles({
    fontSize: '1.15rem',
    fontWeight: 'bold',
  });

  const addListLinkStyles = inlineStyles({
    fontSize: '1.25rem',
    fontWeight: 'bold',
  });

  const { getAllLists } = listService();
  const allLists = getAllLists();
  const myListItems = allLists.map(list => ({
    linkText: list.name,
    href: `/lists/${list.id}`,
  }));

  const myListNavLinkItems = [{ linkText: 'Inbox', href: '#' }].concat(
    myListItems
  );

  return /*html*/ `
    <div style="${myListTitleContainer}">
      <div style="${myListTitleStyles}">My lists</div>
      ${Link({
        linkText: '+',
        href: '/lists/add',
        styles: addListLinkStyles,
        onMouseOver: (e, t) => (t.style.color = '#424242'),
        onMouseOut: (e, t) => (t.style.color = ''),
      })}
    </div>
    <ul style="${myListStyles}">
      ${myListNavLinkItems
        .map(item => NavListItem({ linkText: item.linkText, href: item.href }))
        .join('')}
    </ul>
  `;
}

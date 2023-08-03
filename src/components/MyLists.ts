import { listService } from '../services/listService';
import { inlineStyles } from '../utils/styles';
import Link from './Link';
import NavListItem from './NavListItem';

export default function MyLists() {
  const navListStyles = inlineStyles({
    display: 'flex',
    flexDirection: 'column',
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

  const { getAllLists } = listService();
  const allLists = getAllLists();
  const listNavItems = allLists.map(list => ({
    linkText: list.name,
    href: `/lists/${list.id}`,
  }));

  const secondaryNavLinkItems = [{ linkText: 'Inbox', href: '#' }].concat(
    listNavItems
  );

  return /*html*/ `
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
        .map(item => NavListItem({ linkText: item.linkText, href: item.href }))
        .join('')}
    </ul>
  `;
}

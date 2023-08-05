import { inlineStyles } from '../utils/styles';
import Link from './Link';

export default function NavListItem({
  linkText,
  href,
}: {
  linkText: string;
  href: string;
}) {
  const navLinkStyles = inlineStyles({
    color: '#ffffff',
    whiteSpace: 'nowrap',
    width: '100%',
    display: 'block',
    padding: '0.25rem 1rem',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  });

  const navItem = document.createElement('li');
  navItem.appendChild(Link({ linkText, href, styles: navLinkStyles }));

  return navItem;
}

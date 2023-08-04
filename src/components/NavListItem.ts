import { inlineStyles } from '../utils/styles';
import Link from './Link';

export default function NavListItem({
  parent,
  linkText,
  href,
}: {
  parent: HTMLElement;
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
  Link({ parent: navItem, linkText, href, styles: navLinkStyles });

  parent.appendChild(navItem);
}

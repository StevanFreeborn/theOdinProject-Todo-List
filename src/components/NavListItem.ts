import { inlineStyles } from '../utils/styles';
import Link from './Link';

export default function NavListItem({
  linkText,
  href,
}: {
  linkText: string;
  href: string;
}) {
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
    display: 'block',
    padding: '0.25rem 1rem',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
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

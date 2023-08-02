type LinkProps = {
  linkText: string;
  href: string;
  styles?: string;
  onMouseOver?: (event: Event, target: HTMLElement) => void;
  onMouseOut?: (event: Event, target: HTMLElement) => void;
};

export default function Link({
  linkText,
  href,
  styles,
  onMouseOver = () => {
    return;
  },
  onMouseOut = () => {
    return;
  },
}: LinkProps) {
  // if href is an absolute one append
  // the envs base path.
  const hrefText = /^\/$/.test(href) ? process.env.BASE_PATH + href : href;

  return /*html*/ `
    <a 
      href="${hrefText}" 
      style="${styles}"
      onmouseover="(${onMouseOver})(event, this)"
      onmouseout="(${onMouseOut})(event, this)"
      data-link
    >
      ${linkText}
    </a>
  `;
}

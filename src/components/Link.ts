type LinkProps = {
  parent: HTMLElement;
  linkText: string;
  href: string;
  styles?: string;
};

export default function Link({ parent, linkText, href, styles }: LinkProps) {
  // if href is an absolute one append
  // the envs base path.
  const hrefText = /^\//.test(href) ? process.env.BASE_PATH + href : href;

  const link = document.createElement('a');
  link.title = linkText;
  link.href = hrefText;
  link.style.cssText = styles;
  link.dataset.link = 'true';
  link.text = linkText;

  parent.appendChild(link);
}

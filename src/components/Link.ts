type LinkProps = {
  linkText: string;
  href: string;
  styles: string;
};

export default function Link({ linkText, href, styles }: LinkProps) {
  return /*html*/ `
    <a href="${process.env.BASE_PATH + href}" style="${styles}" data-link>
      ${linkText}
    </a>
  `;
}

function camelToKebab(camelCaseString: string) {
  return camelCaseString.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

export function inlineStyles(styles: object) {
  return Object.keys(styles).reduce((inlineStyles, property) => {
    const value = styles[property];

    if (value !== undefined && value !== null) {
      return `${inlineStyles}${camelToKebab(property)}:${value};`;
    }

    return inlineStyles;
  }, '');
}

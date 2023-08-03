export function isNullOrWhiteSpace({ str }: { str: string }) {
  return !str || str.trim() === '';
}

export function camelCaseToTitleCase({ str }: { str: string }) {
  // add space before upper case letters
  // replace first character with upper case
  return str
    .replace(/([A-Z])/g, match => ` ${match}`)
    .replace(/^./, match => match.toUpperCase())
    .trim();
}

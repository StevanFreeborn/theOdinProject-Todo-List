export function isNullOrWhiteSpace({ str }: { str: string }) {
  return !str || str.trim() === '';
}

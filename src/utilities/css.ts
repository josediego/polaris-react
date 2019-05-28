export function classNames(
  ...classes: (boolean | string | undefined | null | 0)[]
) {
  return classes.filter(Boolean).join(' ');
}

export function variationName(name: string, value: string) {
  return `${name}${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

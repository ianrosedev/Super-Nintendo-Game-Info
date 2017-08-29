export const createImageLink = (string) => (
  string.toLowerCase()
    .replace(/ /g, '_')
    .replace(/:/g, '_-')
    .replace(/'/g, '')
);

export const stringToURL = (string) => (
  string.toLowerCase()
    .replace(/ /g, '-')
);

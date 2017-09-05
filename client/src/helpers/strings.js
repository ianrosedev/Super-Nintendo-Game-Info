export const createImageLink = (string) => (
  string.toLowerCase()
    .replace(/\.|'|!|\?/g, '')
    .replace(/\*/, '-')
    .replace(/ |\//g, '_')
    .replace(/:/g, '_-')
    .replace(/½/g, '1-2')
    .replace(/\$/, 's')
);

export const stringToURL = (string) => (
  string.toLowerCase()
    .replace(/\.|'|!|:|\?/g, '')
    .replace(/ |\/|\*/g, '-')
    .replace(/&/g, 'and')
    .replace(/½/g, '1-2')
    .replace(/\$/, 's')
);

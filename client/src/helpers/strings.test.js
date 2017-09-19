import { createImageLink, stringToURL } from './strings';

describe('helpers/strings', () => {
  describe('createImageLink', () => {
    it('should make uppercase text with spaces lowercase with underscores', () => {
      const text = 'Super Mario World';
      const expected = 'super_mario_world';

      expect(createImageLink(text)).toEqual(expected);
    });

    it('should remove .\'!?', () => {
      const text = `super.'!?duper`;
      const expected = 'superduper';

      expect(createImageLink(text)).toEqual(expected);
    });

    it('should replace : with _-', () => {
      const text = 'super:duper';
      const expected = 'super_-duper';

      expect(createImageLink(text)).toEqual(expected);
    });

    it('should fix other bad characters', () => {
      const text = '$uper*duper/½';
      const expected = 'super-duper_1-2';

      expect(createImageLink(text)).toEqual(expected);
    });
  });

  describe('stringToURL', () => {
    it('should make uppercase text with spaces lowercase with dashes', () => {
      const text = 'Super Mario World';
      const expected = 'super-mario-world';

      expect(stringToURL(text)).toEqual(expected);
    });

    it('should remove .\'!:?', () => {
      const text = `super.'!:?duper`;
      const expected = 'superduper';

      expect(stringToURL(text)).toEqual(expected);
    });

    it('should replace _space_/* with -', () => {
      const text = 'super duper/and*friends';
      const expected = 'super-duper-and-friends';

      expect(stringToURL(text)).toEqual(expected);
    });

    it('should fix other bad characters', () => {
      const text = '$uper-&-duper ½';
      const expected = 'super-and-duper-1-2';

      expect(stringToURL(text)).toEqual(expected);
    });
  });
});

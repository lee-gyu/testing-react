export const PRIMITIVE_COMPARATOR = (a: number, b: number) => (a < b ? -1 : 1);

export const ArrayAPI = <T>(comparator: (a: T, b: T) => number) => {
  return {
    max(...items: T[]) {
      if (items.length === 0)
        throw new Error('Could not get max() by empty list.');

      return items.reduce((a, b) => (comparator(a, b) < 0 ? b : a), items[0]);
    },
  };
};

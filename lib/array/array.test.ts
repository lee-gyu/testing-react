import { describe, it, expect } from 'vitest';
import { ArrayAPI, PRIMITIVE_COMPARATOR } from '.';

describe('lib/array', () => {
  it('max with number[]', () => {
    const list = [1, 2, 3, 4];
    const { max } = ArrayAPI(PRIMITIVE_COMPARATOR);

    expect(max(...list)).toBe(4);
  });

  it('max with number[]', () => {
    const list = [1, 2, 3, 4];
    const { max } = ArrayAPI(PRIMITIVE_COMPARATOR);

    expect(max(...list)).toBe(4);
  });

  it('max with empty list', () => {
    const list: number[] = [];
    const { max } = ArrayAPI(PRIMITIVE_COMPARATOR);

    expect(() => max(...list)).toThrowError();
  });
});

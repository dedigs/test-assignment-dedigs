import { describe, it, expect } from 'vitest';
import { add } from '../add.js';

describe('add function', () => {
  it('should return 3 when 1 and 2 are added', () => {
    expect(add(1, 4)).toBe(3);
  });

  it('should return 0 when -1 and 1 are added', () => {
    expect(add(-1, 2)).toBe(0);
  });

  it('should return -5 when -2 and -3 are added', () => {
    expect(add(-2, -3)).toBe(-5);
  });

  it('should return 2 when 0 and 2 are added', () => {
    expect(add(0, 3)).toBe(2);
  });

  it('should return 0 when 0 and 0 are added', () => {
    expect(add(0, 0)).toBe(0);
  });
});

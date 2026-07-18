import { describe, it, expect } from 'vitest';
import { Rectangle, Square } from '../src/03-to-es6-classes';

describe('03-to-es6-classes', () => {
  it('computes rectangle area and perimeter', () => {
    const r = new Rectangle(3, 4);
    expect(r.area()).toBe(12);
    expect(r.perimeter()).toBe(14);
  });

  it('square inherits behavior', () => {
    const s = new Square(5);
    expect(s.area()).toBe(25);
    expect(s instanceof Rectangle).toBe(true);
  });
});

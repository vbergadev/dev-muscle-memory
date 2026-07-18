/**
 * Exercise: convert prototypes to ES6 classes
 *
 * Goal: Implement area() and perimeter() so Rectangle and its subclass Square work correctly.
 *
 * Prerequisites:
 *   - ES6 classes and inheritance (`extends`, `super`)
 *   - method definitions
 *
 * References:
 *   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 *
 * Time budget: ~12 minutes.
 */

// Rectangle has width/height with area() and perimeter().
// Square extends Rectangle (a square is a rectangle with equal sides).

export class Rectangle {
  constructor(
    public width: number,
    public height: number,
  ) {}
  area(): number {
    throw new Error('not implemented');
  }
  perimeter(): number {
    throw new Error('not implemented');
  }
}

export class Square extends Rectangle {
  constructor(side: number) {
    super(side, side);
  }
}

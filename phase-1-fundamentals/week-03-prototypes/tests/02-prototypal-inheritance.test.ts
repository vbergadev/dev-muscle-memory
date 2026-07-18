import { describe, it, expect } from 'vitest';
import { inherit } from '../src/02-prototypal-inheritance';

describe('02-prototypal-inheritance', () => {
  it('instances are instanceof Parent', () => {
    function Animal(this: any) {}
    (Animal as any).prototype.speak = () => 'sound';
    function Dog(this: any) {}
    inherit(Dog, Animal);
    const d: any = Object.create((Dog as any).prototype);
    expect(d instanceof (Animal as any)).toBe(true);
  });

  it('inherits parent methods', () => {
    function Animal(this: any) {}
    (Animal as any).prototype.speak = () => 'sound';
    function Dog(this: any) {}
    inherit(Dog, Animal);
    const d: any = Object.create((Dog as any).prototype);
    expect(d.speak()).toBe('sound');
  });
});

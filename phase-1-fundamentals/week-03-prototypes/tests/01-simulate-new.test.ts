import { describe, it, expect } from 'vitest';
import { simulateNew } from '../src/01-simulate-new';

describe('01-simulate-new', () => {
  it('copies own properties', () => {
    function Dog(this: any, name: string) { this.name = name; }
    expect(simulateNew(Dog, 'Rex').name).toBe('Rex');
  });

  it('links the prototype chain', () => {
    function Dog(this: any, name: string) { this.name = name; }
    (Dog as any).prototype.bark = () => 'woof';
    const d = simulateNew(Dog, 'Rex');
    expect(d.bark()).toBe('woof');
    expect(d instanceof (Dog as any)).toBe(true);
  });
});

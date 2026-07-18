import { describe, it, expect } from 'vitest';
import { Toggle } from '../src/05-this-binding';

describe('05-this-binding', () => {
  it('toggles on the instance', () => {
    const t = new Toggle();
    t.toggle();
    expect(t.on).toBe(true);
  });

  it('still works when detached from the instance', () => {
    const t = new Toggle();
    const detached = t.toggle;
    detached();
    expect(t.on).toBe(true);
  });

  it('toggles back and forth', () => {
    const t = new Toggle();
    t.toggle(); t.toggle();
    expect(t.on).toBe(false);
  });
});

import { describe, it, expect } from 'vitest';
import { EventEmitter } from '../src/04-event-emitter';

describe('04-event-emitter', () => {
  it('calls subscribed listeners with args', () => {
    const ee = new EventEmitter();
    let received = 0;
    ee.on('tick', (n: number) => { received = n; });
    ee.emit('tick', 42);
    expect(received).toBe(42);
  });

  it('supports multiple listeners', () => {
    const ee = new EventEmitter();
    let count = 0;
    ee.on('x', () => { count++; });
    ee.on('x', () => { count++; });
    ee.emit('x');
    expect(count).toBe(2);
  });

  it('off removes a listener', () => {
    const ee = new EventEmitter();
    let count = 0;
    const fn = () => { count++; };
    ee.on('x', fn);
    ee.off('x', fn);
    ee.emit('x');
    expect(count).toBe(0);
  });
});

/**
 * Exercise: EventEmitter from scratch
 *
 * Goal: Implement a minimal EventEmitter: `on` subscribes a listener to an event, `emit` calls every listener for that event with the given args, `off` removes a specific listener.
 *
 * Prerequisites:
 *   - storing listeners keyed by event name
 *   - iterating and invoking callbacks
 *   - array removal
 *
 * References:
 *   - https://nodejs.org/api/events.html
 *
 * Time budget: ~20 minutes.
 */

export type Listener = (...args: any[]) => void;

export class EventEmitter {
  on(_event: string, _listener: Listener): void {
    throw new Error('not implemented');
  }
  off(_event: string, _listener: Listener): void {
    throw new Error('not implemented');
  }
  emit(_event: string, ..._args: any[]): void {
    throw new Error('not implemented');
  }
}

/**
 * Exercise: Queue (FIFO)
 *
 * Goal: Implement a generic FIFO queue: enqueue (add to back), dequeue (remove from front), front (read front), isEmpty, size.
 *
 * Prerequisites:
 *   - FIFO semantics
 *   - array-backed queue
 *   - generics
 *
 * References:
 *   - https://en.wikipedia.org/wiki/Queue_(abstract_data_type)
 *
 * Time budget: ~18 minutes.
 */

export class Queue<T> {
  enqueue(_item: T): void {
    throw new Error('not implemented');
  }
  dequeue(): T | undefined {
    throw new Error('not implemented');
  }
  front(): T | undefined {
    throw new Error('not implemented');
  }
  isEmpty(): boolean {
    throw new Error('not implemented');
  }
  size(): number {
    throw new Error('not implemented');
  }
}

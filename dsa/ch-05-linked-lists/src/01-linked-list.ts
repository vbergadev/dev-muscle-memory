/**
 * Exercise: Singly linked list
 *
 * Goal: Implement a singly linked list with nodes: push (append), insertAt (insert at index, returns false if out of range), removeAt (remove and return, or undefined), indexOf (or -1), size, toArray.
 *
 * Prerequisites:
 *   - nodes holding value + next pointer
 *   - traversal by walking `next`
 *   - edge cases at head and tail
 *
 * References:
 *   - https://en.wikipedia.org/wiki/Linked_list
 *
 * Time budget: ~30 minutes.
 */

export class LinkedList<T> {
  push(_item: T): void {
    throw new Error('not implemented');
  }
  insertAt(_item: T, _index: number): boolean {
    throw new Error('not implemented');
  }
  removeAt(_index: number): T | undefined {
    throw new Error('not implemented');
  }
  indexOf(_item: T): number {
    throw new Error('not implemented');
  }
  size(): number {
    throw new Error('not implemented');
  }
  toArray(): T[] {
    throw new Error('not implemented');
  }
}

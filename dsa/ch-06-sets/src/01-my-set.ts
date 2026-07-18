/**
 * Exercise: Set with union/intersection/difference
 *
 * Goal: Implement a set (no duplicates): add, has, delete, size, values, and the set operations union, intersection and difference (each returning a new MySet).
 *
 * Prerequisites:
 *   - storing unique items (an object/map as backing store)
 *   - set algebra: union, intersection, difference
 *
 * References:
 *   - https://en.wikipedia.org/wiki/Set_(abstract_data_type)
 *
 * Time budget: ~30 minutes.
 */

export class MySet<T> {
  add(_item: T): void {
    throw new Error('not implemented');
  }
  has(_item: T): boolean {
    throw new Error('not implemented');
  }
  delete(_item: T): boolean {
    throw new Error('not implemented');
  }
  size(): number {
    throw new Error('not implemented');
  }
  values(): T[] {
    throw new Error('not implemented');
  }
  union(_other: MySet<T>): MySet<T> {
    throw new Error('not implemented');
  }
  intersection(_other: MySet<T>): MySet<T> {
    throw new Error('not implemented');
  }
  difference(_other: MySet<T>): MySet<T> {
    throw new Error('not implemented');
  }
}

/**
 * Exercise: Dictionary (map)
 *
 * Goal: A key-value dictionary: set, get (undefined if absent), has, remove (boolean), keys, values, size.
 *
 * Prerequisites:
 *   - backing store as a plain object/Map
 *   - key normalization
 *
 * References:
 *   - https://en.wikipedia.org/wiki/Associative_array
 *
 * Time budget: ~25 minutes.
 */

export class Dictionary<K extends string | number, V> {
  set(_key: K, _value: V): void {
    throw new Error('not implemented');
  }
  get(_key: K): V | undefined {
    throw new Error('not implemented');
  }
  has(_key: K): boolean {
    throw new Error('not implemented');
  }
  remove(_key: K): boolean {
    throw new Error('not implemented');
  }
  keys(): K[] {
    throw new Error('not implemented');
  }
  values(): V[] {
    throw new Error('not implemented');
  }
  size(): number {
    throw new Error('not implemented');
  }
}

/**
 * Exercise: HashTable
 *
 * Goal: A hash table over string keys: put (insert/overwrite), get (undefined if absent), remove (boolean). Use a hash function + handle collisions (separate chaining).
 *
 * Prerequisites:
 *   - a hash function turning a key into a bucket index
 *   - collision handling (separate chaining)
 *   - overwrite on duplicate key
 *
 * References:
 *   - https://en.wikipedia.org/wiki/Hash_table
 *
 * Time budget: ~30 minutes.
 */

export class HashTable<V> {
  put(_key: string, _value: V): void {
    throw new Error('not implemented');
  }
  get(_key: string): V | undefined {
    throw new Error('not implemented');
  }
  remove(_key: string): boolean {
    throw new Error('not implemented');
  }
}

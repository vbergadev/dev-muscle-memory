import type { Equal, Expect } from './_helpers';
import type { TupleToUnion, TupleToObject, Includes } from '../src/09-tuple-union';

// If a type is wrong, the Expect<...> lines below become type errors and
// Vitest's typecheck reports this file as failing. Make them all pass.
type cases = [
  Expect<Equal<TupleToUnion<[1, 2, 3]>, 1 | 2 | 3>>,
  Expect<Equal<TupleToUnion<['a', 'b']>, 'a' | 'b'>>,

  Expect<Equal<TupleToObject<['a', 'b']>, { a: 'a'; b: 'b' }>>,

  Expect<Equal<Includes<['a', 'b', 'c'], 'b'>, true>>,
  Expect<Equal<Includes<['a', 'b', 'c'], 'x'>, false>>,
];

// touch the type so it is not reported as unused
export type _Cases = cases;

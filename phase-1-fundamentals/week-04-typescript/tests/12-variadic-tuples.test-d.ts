import type { Equal, Expect } from './_helpers';
import type { Push, Unshift, Concat, MyReverse } from '../src/12-variadic-tuples';

// If a type is wrong, the Expect<...> lines below become type errors and
// Vitest's typecheck reports this file as failing. Make them all pass.
type cases = [
  Expect<Equal<Push<[1, 2], 3>, [1, 2, 3]>>,
  Expect<Equal<Unshift<[2, 3], 1>, [1, 2, 3]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<MyReverse<[1, 2, 3]>, [3, 2, 1]>>,
  Expect<Equal<MyReverse<['a', 'b']>, ['b', 'a']>>,
];

// touch the type so it is not reported as unused
export type _Cases = cases;

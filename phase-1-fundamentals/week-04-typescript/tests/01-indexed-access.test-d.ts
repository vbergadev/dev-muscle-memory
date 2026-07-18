import type { Equal, Expect } from './_helpers';
import type { First, Length, ElementType } from '../src/01-indexed-access';

// If a type is wrong, the Expect<...> lines below become type errors and
// Vitest's typecheck reports this file as failing. Make them all pass.
type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<['a', 'b']>, 'a'>>,

  Expect<Equal<Length<[1, 2, 3]>, 3>>,
  Expect<Equal<Length<[]>, 0>>,

  Expect<Equal<ElementType<number[]>, number>>,
  Expect<Equal<ElementType<[1, 'a', true]>, 1 | 'a' | true>>,
];

// touch the type so it is not reported as unused
export type _Cases = cases;

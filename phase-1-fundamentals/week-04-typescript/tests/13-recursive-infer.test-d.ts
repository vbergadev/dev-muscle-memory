import type { Equal, Expect } from './_helpers';
import type { FlattenArray, LastOf, Pop } from '../src/13-recursive-infer';

// If a type is wrong, the Expect<...> lines below become type errors and
// Vitest's typecheck reports this file as failing. Make them all pass.
type cases = [
  Expect<Equal<FlattenArray<[1, [2, 3], 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<FlattenArray<[[1], [2], [3]]>, [1, 2, 3]>>,

  Expect<Equal<LastOf<[1, 2, 3]>, 3>>,
  Expect<Equal<LastOf<[]>, never>>,

  Expect<Equal<Pop<[1, 2, 3]>, [1, 2]>>,
];

// touch the type so it is not reported as unused
export type _Cases = cases;

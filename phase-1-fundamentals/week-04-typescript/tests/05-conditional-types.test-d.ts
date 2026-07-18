import type { Equal, Expect } from './_helpers';
import type { If, MyExclude, MyExtract, MyNonNullable } from '../src/05-conditional-types';

// If a type is wrong, the Expect<...> lines below become type errors and
// Vitest's typecheck reports this file as failing. Make them all pass.
type cases = [
  Expect<Equal<If<true, 'yes', 'no'>, 'yes'>>,
  Expect<Equal<If<false, 'yes', 'no'>, 'no'>>,

  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<string | number | boolean, boolean>, string | number>>,

  Expect<Equal<MyExtract<'a' | 'b' | 'c', 'a' | 'c'>, 'a' | 'c'>>,

  Expect<Equal<MyNonNullable<string | null | undefined>, string>>,
  Expect<Equal<MyNonNullable<number | undefined>, number>>,
];

// touch the type so it is not reported as unused
export type _Cases = cases;

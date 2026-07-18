import type { Equal, Expect } from './_helpers';
import type { TrimLeft, Trim, Split } from '../src/15-string-parsing';

// If a type is wrong, the Expect<...> lines below become type errors and
// Vitest's typecheck reports this file as failing. Make them all pass.
type cases = [
  Expect<Equal<TrimLeft<'   hi'>, 'hi'>>,
  Expect<Equal<TrimLeft<'hi'>, 'hi'>>,

  Expect<Equal<Trim<'  hi  '>, 'hi'>>,
  Expect<Equal<Trim<'\n\t hi \t'>, 'hi'>>,

  Expect<Equal<Split<'a,b,c', ','>, ['a', 'b', 'c']>>,
  Expect<Equal<Split<'a', ','>, ['a']>>,
];

// touch the type so it is not reported as unused
export type _Cases = cases;

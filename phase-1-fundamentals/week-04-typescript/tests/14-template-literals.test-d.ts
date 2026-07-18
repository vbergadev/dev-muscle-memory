import type { Equal, Expect } from './_helpers';
import type { MyCapitalize, Replace, ReplaceAll } from '../src/14-template-literals';

// If a type is wrong, the Expect<...> lines below become type errors and
// Vitest's typecheck reports this file as failing. Make them all pass.
type cases = [
  Expect<Equal<MyCapitalize<'hello'>, 'Hello'>>,
  Expect<Equal<MyCapitalize<''>, ''>>,

  Expect<Equal<Replace<'foobar', 'o', '0'>, 'f0obar'>>,
  Expect<Equal<Replace<'abc', 'x', 'y'>, 'abc'>>,

  Expect<Equal<ReplaceAll<'foobar', 'o', '0'>, 'f00bar'>>,
  Expect<Equal<ReplaceAll<'aaa', 'a', 'b'>, 'bbb'>>,
];

// touch the type so it is not reported as unused
export type _Cases = cases;

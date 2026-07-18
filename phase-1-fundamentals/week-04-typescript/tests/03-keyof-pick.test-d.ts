import type { Equal, Expect } from './_helpers';
import type { MyKeys, MyValues, MyPick } from '../src/03-keyof-pick';

// If a type is wrong, the Expect<...> lines below become type errors and
// Vitest's typecheck reports this file as failing. Make them all pass.
type cases = [
  Expect<Equal<MyKeys<{ a: 1; b: 2 }>, 'a' | 'b'>>,
  Expect<Equal<MyKeys<{ name: string; age: number }>, 'name' | 'age'>>,

  Expect<Equal<MyValues<{ a: 1; b: 2 }>, 1 | 2>>,
  Expect<Equal<MyValues<{ name: string; age: number }>, string | number>>,

  Expect<Equal<MyPick<{ a: number; b: string; c: boolean }, 'a' | 'c'>, { a: number; c: boolean }>>,
];

// touch the type so it is not reported as unused
export type _Cases = cases;

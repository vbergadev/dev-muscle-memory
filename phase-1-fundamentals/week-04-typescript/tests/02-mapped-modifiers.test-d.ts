import type { Equal, Expect } from './_helpers';
import type { MyPartial, MyRequired, MyReadonly, Mutable } from '../src/02-mapped-modifiers';

// If a type is wrong, the Expect<...> lines below become type errors and
// Vitest's typecheck reports this file as failing. Make them all pass.
type cases = [
  Expect<Equal<MyPartial<{ a: number; b: string }>, { a?: number; b?: string }>>,

  Expect<Equal<MyRequired<{ a?: number; b?: string }>, { a: number; b: string }>>,

  Expect<Equal<MyReadonly<{ a: number }>, { readonly a: number }>>,

  Expect<Equal<Mutable<{ readonly a: number; readonly b: string }>, { a: number; b: string }>>,
];

// touch the type so it is not reported as unused
export type _Cases = cases;

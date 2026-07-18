import type { Equal, Expect } from './_helpers';
import type { MyOmit, PickByType, OmitByType } from '../src/06-omit-and-filter';

// If a type is wrong, the Expect<...> lines below become type errors and
// Vitest's typecheck reports this file as failing. Make them all pass.
type cases = [
  Expect<Equal<MyOmit<{ a: number; b: string; c: boolean }, 'b'>, { a: number; c: boolean }>>,
  Expect<Equal<MyOmit<{ a: number; b: string; c: boolean }, 'a' | 'c'>, { b: string }>>,

  Expect<Equal<PickByType<{ a: number; b: string; c: number }, number>, { a: number; c: number }>>,

  Expect<Equal<OmitByType<{ a: number; b: string; c: number }, number>, { b: string }>>,
];

// touch the type so it is not reported as unused
export type _Cases = cases;

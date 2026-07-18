import type { Equal, Expect } from './_helpers';
import type { MyOmit } from '../src/05-my-omit';

// If MyOmit is wrong, the Expect<...> lines below become type errors and
// Vitest's typecheck reports this file as failing. Make them all pass.
type cases = [
  Expect<Equal<MyOmit<{ a: number; b: string; c: boolean }, 'b'>, { a: number; c: boolean }>>,
];

// touch the type so it is not reported as unused
export type _Cases = cases;

import type { Equal, Expect } from './_helpers';
import type { MyPick } from '../src/04-my-pick';

// If MyPick is wrong, the Expect<...> lines below become type errors and
// Vitest's typecheck reports this file as failing. Make them all pass.
type cases = [
  Expect<Equal<MyPick<{ a: number; b: string; c: boolean }, 'a' | 'c'>, { a: number; c: boolean }>>,
];

// touch the type so it is not reported as unused
export type _Cases = cases;

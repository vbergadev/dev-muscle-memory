import type { Equal, Expect } from './_helpers';
import type { MyRecord } from '../src/06-my-record';

// If MyRecord is wrong, the Expect<...> lines below become type errors and
// Vitest's typecheck reports this file as failing. Make them all pass.
type cases = [
  Expect<Equal<MyRecord<'a' | 'b', number>, { a: number; b: number }>>,
];

// touch the type so it is not reported as unused
export type _Cases = cases;

import type { Equal, Expect } from './_helpers';
import type { DeepPartial } from '../src/01-deep-partial';

// If DeepPartial is wrong, the Expect<...> lines below become type errors and
// Vitest's typecheck reports this file as failing. Make them all pass.
type cases = [
  Expect<Equal<DeepPartial<{ a: number; b: { c: string } }>, { a?: number; b?: { c?: string } }>>,
  Expect<Equal<DeepPartial<{ x: number }>, { x?: number }>>,
];

// touch the type so it is not reported as unused
export type _Cases = cases;

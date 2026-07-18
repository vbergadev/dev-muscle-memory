import type { Equal, Expect } from './_helpers';
import type { DeepReadonly } from '../src/02-deep-readonly';

// If DeepReadonly is wrong, the Expect<...> lines below become type errors and
// Vitest's typecheck reports this file as failing. Make them all pass.
type cases = [
  Expect<Equal<DeepReadonly<{ a: number; b: { c: string } }>, { readonly a: number; readonly b: { readonly c: string } }>>,
];

// touch the type so it is not reported as unused
export type _Cases = cases;

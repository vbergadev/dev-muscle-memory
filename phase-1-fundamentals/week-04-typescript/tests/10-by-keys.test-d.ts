import type { Equal, Expect } from './_helpers';
import type { Merge, PartialByKeys, RequiredByKeys } from '../src/10-by-keys';

// If a type is wrong, the Expect<...> lines below become type errors and
// Vitest's typecheck reports this file as failing. Make them all pass.
type cases = [
  Expect<Equal<Merge<{ a: number; b: string }, { b: number; c: boolean }>, { a: number; b: number; c: boolean }>>,

  Expect<
    Equal<
      PartialByKeys<{ a: number; b: string; c: boolean }, 'a' | 'b'>,
      { a?: number; b?: string; c: boolean }
    >
  >,

  Expect<
    Equal<
      RequiredByKeys<{ a?: number; b?: string; c: boolean }, 'a'>,
      { a: number; b?: string; c: boolean }
    >
  >,
];

// touch the type so it is not reported as unused
export type _Cases = cases;

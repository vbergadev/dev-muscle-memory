import type { Equal, Expect } from './_helpers';
import type { DeepPartial, DeepReadonly, DeepMutable } from '../src/11-deep-modifiers';

// If a type is wrong, the Expect<...> lines below become type errors and
// Vitest's typecheck reports this file as failing. Make them all pass.
type cases = [
  Expect<Equal<DeepPartial<{ a: number; b: { c: string } }>, { a?: number; b?: { c?: string } }>>,

  Expect<
    Equal<
      DeepReadonly<{ a: number; b: { c: string } }>,
      { readonly a: number; readonly b: { readonly c: string } }
    >
  >,

  Expect<
    Equal<
      DeepMutable<{ readonly a: number; readonly b: { readonly c: string } }>,
      { a: number; b: { c: string } }
    >
  >,
];

// touch the type so it is not reported as unused
export type _Cases = cases;

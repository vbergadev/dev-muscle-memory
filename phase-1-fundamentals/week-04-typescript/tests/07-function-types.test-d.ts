import type { Equal, Expect } from './_helpers';
import type { MyReturnType, MyParameters, FirstParameter } from '../src/07-function-types';

// If a type is wrong, the Expect<...> lines below become type errors and
// Vitest's typecheck reports this file as failing. Make them all pass.
type cases = [
  Expect<Equal<MyReturnType<() => string>, string>>,
  Expect<Equal<MyReturnType<(a: number) => boolean>, boolean>>,

  Expect<Equal<MyParameters<(a: number, b: string) => void>, [number, string]>>,
  Expect<Equal<MyParameters<() => void>, []>>,

  Expect<Equal<FirstParameter<(a: number, b: string) => void>, number>>,
  Expect<Equal<FirstParameter<() => void>, never>>,
];

// touch the type so it is not reported as unused
export type _Cases = cases;

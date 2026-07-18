import type { Equal, Expect } from './_helpers';
import type { MyAwaited, Unwrap, IsPromise } from '../src/08-awaited';

// If a type is wrong, the Expect<...> lines below become type errors and
// Vitest's typecheck reports this file as failing. Make them all pass.
type cases = [
  Expect<Equal<MyAwaited<Promise<string>>, string>>,
  Expect<Equal<MyAwaited<Promise<Promise<number>>>, number>>,

  Expect<Equal<Unwrap<Promise<number>>, number>>,
  Expect<Equal<Unwrap<string>, string>>,

  Expect<Equal<IsPromise<Promise<number>>, true>>,
  Expect<Equal<IsPromise<number>, false>>,
];

// touch the type so it is not reported as unused
export type _Cases = cases;

import type { Equal, Expect } from './_helpers';
import type { MyAwaited } from '../src/03-awaited';

// If MyAwaited is wrong, the Expect<...> lines below become type errors and
// Vitest's typecheck reports this file as failing. Make them all pass.
type cases = [
  Expect<Equal<MyAwaited<Promise<number>>, number>>,
  Expect<Equal<MyAwaited<Promise<Promise<string>>>, string>>,
];

// touch the type so it is not reported as unused
export type _Cases = cases;

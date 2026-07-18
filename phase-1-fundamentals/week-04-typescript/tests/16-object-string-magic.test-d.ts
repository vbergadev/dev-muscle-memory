import type { Equal, Expect } from './_helpers';
import type { Getters, CamelCase, AppendPrefix } from '../src/16-object-string-magic';

// If a type is wrong, the Expect<...> lines below become type errors and
// Vitest's typecheck reports this file as failing. Make them all pass.
type cases = [
  Expect<
    Equal<
      Getters<{ name: string; age: number }>,
      { getName: () => string; getAge: () => number }
    >
  >,

  Expect<Equal<CamelCase<'foo-bar-baz'>, 'fooBarBaz'>>,
  Expect<Equal<CamelCase<'hello'>, 'hello'>>,

  Expect<Equal<AppendPrefix<{ a: number; b: string }, 'my_'>, { my_a: number; my_b: string }>>,
];

// touch the type so it is not reported as unused
export type _Cases = cases;

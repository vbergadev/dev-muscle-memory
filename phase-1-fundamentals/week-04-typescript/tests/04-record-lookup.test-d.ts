import type { Equal, Expect } from './_helpers';
import type { MyRecord, PropType, MyReadonlyRecord } from '../src/04-record-lookup';

// If a type is wrong, the Expect<...> lines below become type errors and
// Vitest's typecheck reports this file as failing. Make them all pass.
type cases = [
  Expect<Equal<MyRecord<'a' | 'b', number>, { a: number; b: number }>>,
  Expect<Equal<MyRecord<'id', string>, { id: string }>>,

  Expect<Equal<PropType<{ a: number; b: string }, 'b'>, string>>,
  Expect<Equal<PropType<{ a: number; b: string }, 'a'>, number>>,

  Expect<Equal<MyReadonlyRecord<'x' | 'y', boolean>, { readonly x: boolean; readonly y: boolean }>>,
];

// touch the type so it is not reported as unused
export type _Cases = cases;

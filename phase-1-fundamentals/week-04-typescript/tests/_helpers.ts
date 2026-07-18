// Type-level assertion helpers (from the type-challenges project).
export type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false;

export type Expect<T extends true> = T;
export type ExpectFalse<T extends false> = T;

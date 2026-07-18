/**
 * Exercise: createAccount
 *
 * Goal: Return an account object with private balance. `deposit` adds, `withdraw` subtracts and returns false (without changing balance) if funds are insufficient, `getBalance` reads. The balance must not be directly accessible on the returned object.
 *
 * Prerequisites:
 *   - module pattern / private state via closure
 *   - returning an object of methods
 *
 * References:
 *   - https://javascript.info/closure
 *
 * Time budget: ~15 minutes.
 */

export function createAccount(initial: number): { deposit: (n: number) => void; withdraw: (n: number) => boolean; getBalance: () => number } {
  throw new Error('not implemented');
}

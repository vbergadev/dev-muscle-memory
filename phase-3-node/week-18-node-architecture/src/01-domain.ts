/**
 * Exercise: Account domain entity
 *
 * Goal: A domain entity Account that enforces its own invariants. new Account(initial=0); get balance; deposit(amount) requires amount > 0 (else throw Error matching /positive/); withdraw(amount) requires 0 < amount <= balance (else throw Error matching /insufficient/).
 *
 * Prerequisites:
 *   - entities own their invariants (rich domain model)
 *   - guard clauses that throw on invalid state
 *   - keeping business rules free of framework/db code
 *
 * References:
 *   - https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html
 *
 * Rules:
 *   - deposit throws on amount <= 0 (message contains "positive")
 *   - withdraw throws on overdraw (message contains "insufficient")
 *
 * Time budget: ~22 minutes.
 */

export class Account {
  private _balance: number;

  constructor(initial = 0) {
    this._balance = initial;
  }

  get balance(): number {
    throw new Error('not implemented');
  }

  deposit(_amount: number): void {
    throw new Error('not implemented');
  }

  withdraw(_amount: number): void {
    throw new Error('not implemented');
  }
}

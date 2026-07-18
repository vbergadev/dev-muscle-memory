import { describe, it, expect } from 'vitest';
import { Account } from '../src/01-domain';

describe('Account (domain)', () => {
  it('deposits and reflects the new balance', () => {
    const a = new Account(100);
    a.deposit(50);
    expect(a.balance).toBe(150);
  });

  it('withdraws within the balance', () => {
    const a = new Account(100);
    a.withdraw(40);
    expect(a.balance).toBe(60);
  });

  it('rejects a non-positive deposit', () => {
    expect(() => new Account(100).deposit(-5)).toThrow(/positive/i);
  });

  it('rejects an overdraw', () => {
    expect(() => new Account(100).withdraw(200)).toThrow(/insufficient/i);
  });
});

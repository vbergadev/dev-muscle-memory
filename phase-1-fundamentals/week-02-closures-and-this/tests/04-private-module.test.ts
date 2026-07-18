import { describe, it, expect } from 'vitest';
import { createAccount } from '../src/04-private-module';

describe('04-private-module', () => {
  it('deposits and reads balance', () => {
    const acc = createAccount(100);
    acc.deposit(50);
    expect(acc.getBalance()).toBe(150);
  });

  it('withdraws when funds allow', () => {
    const acc = createAccount(100);
    expect(acc.withdraw(40)).toBe(true);
    expect(acc.getBalance()).toBe(60);
  });

  it('refuses overdraw and keeps balance', () => {
    const acc = createAccount(100);
    expect(acc.withdraw(200)).toBe(false);
    expect(acc.getBalance()).toBe(100);
  });
});

import { describe, it, expect } from 'vitest';
import { hashPassword, verifyPassword } from '../src/01-password-hash';

describe('password hashing', () => {
  it('hashes to something other than the plaintext', async () => {
    const hash = await hashPassword('s3cret');
    expect(hash).not.toBe('s3cret');
  });

  it('verifies the correct password and rejects a wrong one', async () => {
    const hash = await hashPassword('s3cret');
    expect(await verifyPassword('s3cret', hash)).toBe(true);
    expect(await verifyPassword('wrong', hash)).toBe(false);
  });
});

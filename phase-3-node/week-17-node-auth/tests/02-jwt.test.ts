import { describe, it, expect } from 'vitest';
import { signToken, verifyToken } from '../src/02-jwt';

describe('jwt', () => {
  it('round-trips a payload', () => {
    const token = signToken({ sub: '1', role: 'admin' }, 'sekret');
    expect(typeof token).toBe('string');
    const decoded = verifyToken(token, 'sekret') as { sub: string; role: string };
    expect(decoded.sub).toBe('1');
    expect(decoded.role).toBe('admin');
  });

  it('throws when the secret is wrong', () => {
    const token = signToken({ sub: '1' }, 'sekret');
    expect(() => verifyToken(token, 'wrong-secret')).toThrow();
  });
});

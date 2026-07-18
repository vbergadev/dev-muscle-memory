/**
 * Exercise: hashPassword / verifyPassword
 *
 * Goal: Using bcrypt, implement hashPassword(password) -> a salted hash (never the plaintext), and verifyPassword(password, hash) -> boolean.
 *
 * Prerequisites:
 *   - why passwords are hashed with a salt (not encrypted)
 *   - bcrypt hash/compare
 *   - async APIs
 *
 * References:
 *   - https://github.com/dcodeIO/bcrypt.js
 *
 * Time budget: ~15 minutes.
 */

import bcrypt from 'bcryptjs';

export function hashPassword(password: string): Promise<string> {
  void bcrypt;
  throw new Error('not implemented');
}

export function verifyPassword(password: string, hash: string): Promise<boolean> {
  throw new Error('not implemented');
}

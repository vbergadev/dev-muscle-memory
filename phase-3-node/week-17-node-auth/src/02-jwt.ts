/**
 * Exercise: signToken / verifyToken
 *
 * Goal: Using jsonwebtoken, implement signToken(payload, secret, expiresIn?) -> a signed JWT string, and verifyToken(token, secret) -> the decoded payload (throws if invalid/expired).
 *
 * Prerequisites:
 *   - what a JWT is (header.payload.signature)
 *   - signing vs verifying
 *   - access vs refresh tokens (expiry)
 *
 * References:
 *   - https://github.com/auth0/node-jsonwebtoken
 *   - https://jwt.io/introduction
 *
 * Time budget: ~20 minutes.
 */

import jwt from 'jsonwebtoken';

export function signToken(payload: object, secret: string, expiresIn?: string): string {
  void jwt;
  throw new Error('not implemented');
}

export function verifyToken(token: string, secret: string): jwt.JwtPayload | string {
  throw new Error('not implemented');
}

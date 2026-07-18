/**
 * Exercise: Auth state with useReducer
 *
 * Goal: A useAuth() hook backed by useReducer. Returns { user: string | null; login: (name: string) => void; logout: () => void }. user starts null.
 *
 * Prerequisites:
 *   - useReducer (state + dispatch)
 *   - action objects and a reducer function
 *   - why useReducer over useState for related transitions
 *
 * References:
 *   - https://react.dev/reference/react/useReducer
 *
 * Time budget: ~20 minutes.
 */

export function useAuth(): { user: string | null; login: (name: string) => void; logout: () => void } {
  throw new Error('not implemented');
}

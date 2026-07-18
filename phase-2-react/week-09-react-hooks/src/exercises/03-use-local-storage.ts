/**
 * Exercise: useLocalStorage
 *
 * Goal: A hook useLocalStorage<T>(key, initial): [T, (value: T) => void] that reads the initial value from localStorage (falling back to `initial`) and persists updates (as JSON).
 *
 * Prerequisites:
 *   - useState with a lazy initializer
 *   - useEffect or a setter that writes to localStorage
 *   - JSON serialization
 *
 * References:
 *   - https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
 *
 * Rules:
 *   - Persist values as JSON
 *
 * Time budget: ~20 minutes.
 */

export function useLocalStorage<T>(key: string, initial: T): [T, (value: T) => void] {
  throw new Error('not implemented');
}

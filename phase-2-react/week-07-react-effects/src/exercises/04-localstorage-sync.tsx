/**
 * Exercise: Sync state with localStorage
 *
 * Goal: Render a controlled text input whose value is persisted under
 *   `storageKey` in localStorage.
 *   - On mount, initialize the input from localStorage (empty string if absent)
 *   - Whenever the value changes, write it back to localStorage
 *
 * Prerequisites:
 *   - useState with a lazy initializer: useState(() => ...)
 *   - useEffect to run a side effect when a value changes
 *   - Why reading localStorage during render (not lazily) is wasteful
 *
 * References:
 *   - https://react.dev/reference/react/useState#avoiding-recreating-the-initial-state
 *   - https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
 *
 * Rules:
 *   - Do not use any hook library — build it with useState + useEffect
 *
 * Time budget: ~20 minutes.
 */

export function LocalStorageSync({ storageKey }: { storageKey: string }): JSX.Element {
  throw new Error('not implemented');
}

/**
 * Exercise: useCallback
 *
 * Goal: A SearchBox({ items }) with a text input that filters items by case-insensitive substring, rendering matches as <li>. Wrap the filter/change handler in useCallback so a memoized child would not re-render needlessly.
 *
 * Prerequisites:
 *   - useCallback and referential stability
 *   - controlled input + derived filtered list
 *
 * References:
 *   - https://react.dev/reference/react/useCallback
 *
 * Rules:
 *   - Render matches as <li>; initially show all items
 *
 * Time budget: ~18 minutes.
 */

export function SearchBox({ items }: { items: string[] }): JSX.Element {
  throw new Error('not implemented');
}

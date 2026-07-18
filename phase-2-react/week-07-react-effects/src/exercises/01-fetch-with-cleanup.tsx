/**
 * Exercise: Fetch with useEffect + cleanup
 *
 * Goal: Fetch JSON from `url` when the component mounts (and whenever `url`
 *   changes) and render it. While loading, show "loading...". If the component
 *   unmounts or `url` changes before the request finishes, the stale response
 *   must NOT be applied to state (avoid the "setState on unmounted / race" bug).
 *
 * Prerequisites:
 *   - useEffect dependency arrays
 *   - useEffect cleanup functions
 *   - AbortController, or an "ignore" flag captured in the effect closure
 *   - How overlapping async requests can resolve out of order
 *
 * References:
 *   - https://react.dev/reference/react/useEffect
 *   - https://react.dev/learn/synchronizing-with-effects#fetching-data
 *   - https://developer.mozilla.org/en-US/docs/Web/API/AbortController
 *
 * Rules:
 *   - Do not use any data-fetching library
 *   - Must clean up so a superseded request cannot overwrite fresh state
 *
 * Time budget: ~25 minutes.
 */

export function FetchWithCleanup({ url }: { url: string }): JSX.Element {
  throw new Error('not implemented');
}

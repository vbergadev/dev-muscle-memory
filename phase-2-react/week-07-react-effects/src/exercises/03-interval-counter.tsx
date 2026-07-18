/**
 * Exercise: Interval Counter with cleanup
 *
 * Goal: Build a component that counts up by 1 every second while mounted.
 *   - Must start at 0
 *   - Must stop and clean up the interval on unmount
 *   - Must NOT leak intervals if the component re-renders due to prop changes
 *
 * Prerequisites:
 *   - useEffect and its cleanup function
 *   - How closures capture state (the classic stale-state bug in setInterval)
 *   - useRef vs useState for values that shouldn't cause re-renders
 *   - When to use functional updates: setState(prev => prev + 1)
 *
 * References:
 *   - https://react.dev/reference/react/useEffect
 *   - https://react.dev/reference/react/useRef
 *   - https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 *
 * Rules:
 *   - Do not use any library
 *   - Component must accept a `step` prop (default 1) and change without breaking the interval
 *
 * Time budget: ~25 minutes.
 */

export function IntervalCounter({ step = 1 }: { step?: number }): JSX.Element {
  throw new Error('not implemented');
}

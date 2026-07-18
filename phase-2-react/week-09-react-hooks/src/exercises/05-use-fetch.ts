/**
 * Exercise: useFetch
 *
 * Goal: A hook useFetch<T>(url): { data: T | undefined; loading: boolean; error: Error | null }. Starts loading, fetches JSON, then exposes data or error. Clean up to avoid setting state after unmount.
 *
 * Prerequisites:
 *   - useEffect data fetching
 *   - cleanup / ignore flag to avoid race conditions
 *   - modelling loading/data/error states
 *
 * References:
 *   - https://react.dev/learn/synchronizing-with-effects#fetching-data
 *
 * Time budget: ~25 minutes.
 */

export function useFetch<T>(url: string): { data: T | undefined; loading: boolean; error: Error | null } {
  throw new Error('not implemented');
}

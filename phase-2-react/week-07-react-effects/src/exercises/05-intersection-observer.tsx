/**
 * Exercise: Reveal on scroll with IntersectionObserver
 *
 * Goal: Render a tall spacer followed by a target box. When the target scrolls
 *   into the viewport, render the text "visible" (before that, "hidden").
 *   The observer must be created in an effect and disconnected on cleanup.
 *
 * Prerequisites:
 *   - useRef to reference the observed DOM node
 *   - useEffect to set up/tear down a browser observer
 *   - The IntersectionObserver API (entries, isIntersecting, disconnect)
 *   - Why the observer belongs in an effect, not in render
 *
 * References:
 *   - https://react.dev/learn/synchronizing-with-effects
 *   - https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver
 *
 * Rules:
 *   - Do not use a library — use the native IntersectionObserver
 *   - Must call observer.disconnect() in the effect cleanup
 *
 * Time budget: ~25 minutes.
 */

export function IntersectionReveal(): JSX.Element {
  throw new Error('not implemented');
}

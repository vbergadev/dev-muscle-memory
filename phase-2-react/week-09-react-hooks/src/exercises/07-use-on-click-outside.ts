/**
 * Exercise: useOnClickOutside
 *
 * Goal: A hook useOnClickOutside(ref, handler) that calls handler when a mousedown/click happens outside the referenced element. Adds and removes the document listener in an effect.
 *
 * Prerequisites:
 *   - useEffect with document event listeners
 *   - refs and node.contains(target)
 *   - cleanup on unmount
 *
 * References:
 *   - https://react.dev/reference/react/useRef
 *
 * Time budget: ~22 minutes.
 */

import type { RefObject } from 'react';

export function useOnClickOutside<T extends HTMLElement>(
  ref: RefObject<T>,
  handler: () => void,
): void {
  throw new Error('not implemented');
}

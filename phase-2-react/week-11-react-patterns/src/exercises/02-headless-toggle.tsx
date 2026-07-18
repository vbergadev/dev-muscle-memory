/**
 * Exercise: Headless component — Toggle (render props)
 *
 * Goal: A Toggle component that owns on/off state but renders NO UI itself. It calls its children as a function with { on, toggle }, letting the consumer decide the markup.
 *
 * Prerequisites:
 *   - render props / function-as-children
 *   - separating logic from presentation (headless)
 *
 * References:
 *   - https://kentcdodds.com/blog
 *
 * Time budget: ~20 minutes.
 */

import type { ReactNode } from 'react';

export function Toggle({
  children,
}: {
  children: (state: { on: boolean; toggle: () => void }) => ReactNode;
}): JSX.Element {
  throw new Error('not implemented');
}

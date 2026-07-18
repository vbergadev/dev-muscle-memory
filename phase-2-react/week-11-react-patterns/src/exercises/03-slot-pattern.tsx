/**
 * Exercise: Slot pattern
 *
 * Goal: A Layout component with named slots: props { header, sidebar, children }. Render each slot in its region (header on top, sidebar aside, children as the main content).
 *
 * Prerequisites:
 *   - passing JSX via named props (slots)
 *   - composition beyond a single children prop
 *
 * References:
 *   - https://react.dev/learn/passing-props-to-a-component
 *
 * Time budget: ~15 minutes.
 */

import type { ReactNode } from 'react';

export function Layout({
  header,
  sidebar,
  children,
}: {
  header: ReactNode;
  sidebar: ReactNode;
  children: ReactNode;
}): JSX.Element {
  throw new Error('not implemented');
}

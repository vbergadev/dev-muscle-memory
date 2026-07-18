/**
 * Exercise: Panel with header slot + children
 *
 * Goal: A Panel component with props { header: ReactNode; children: ReactNode }. Render the header on top and the children below.
 *
 * Prerequisites:
 *   - composition with the children prop
 *   - passing JSX as props (ReactNode)
 *
 * References:
 *   - https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children
 *
 * Time budget: ~12 minutes.
 */

import type { ReactNode } from 'react';

export function Panel({ header, children }: { header: ReactNode; children: ReactNode }): JSX.Element {
  throw new Error('not implemented');
}

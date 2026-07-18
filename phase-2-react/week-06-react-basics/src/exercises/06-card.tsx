/**
 * Exercise: Card with typed props
 *
 * Goal: A Card component with props { title: string; children: ReactNode }. Render the title inside a heading and the children below it.
 *
 * Prerequisites:
 *   - typing props with TypeScript
 *   - the children prop (ReactNode)
 *   - semantic headings
 *
 * References:
 *   - https://react.dev/learn/passing-props-to-a-component
 *
 * Time budget: ~12 minutes.
 */

import type { ReactNode } from 'react';

export function Card({ title, children }: { title: string; children: ReactNode }): JSX.Element {
  throw new Error('not implemented');
}

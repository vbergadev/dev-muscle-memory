/**
 * Exercise: React.memo
 *
 * Goal: Export a Child component wrapped in React.memo. It receives { label: string; onRender: () => void }, calls onRender() during render (for measurement), and displays the label. Because it is memoized, re-rendering with identical props must NOT call the render function again.
 *
 * Prerequisites:
 *   - React.memo and shallow prop comparison
 *   - when memo actually prevents a re-render
 *   - referential stability of props
 *
 * References:
 *   - https://react.dev/reference/react/memo
 *
 * Rules:
 *   - Wrap the component in memo
 *   - Call onRender() on each actual render
 *
 * Time budget: ~18 minutes.
 */

import { memo } from 'react';

export const Child = memo(function Child(_props: { label: string; onRender: () => void }): JSX.Element {
  throw new Error('not implemented');
});

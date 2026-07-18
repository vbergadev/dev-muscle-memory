/**
 * Exercise: Virtualized list from scratch
 *
 * Goal: A VirtualList({ items, height, itemHeight }) that renders ONLY the rows visible in a `height`-pixel window (based on scroll position), not all items. Each rendered row is an element with data-testid="row". Do not use react-window or any library.
 *
 * Prerequisites:
 *   - windowing/virtualization concept
 *   - scroll offset -> visible index range
 *   - absolute positioning of rows over a tall spacer
 *
 * References:
 *   - https://web.dev/articles/virtualize-long-lists-react-window
 *
 * Rules:
 *   - Do not use any virtualization library
 *   - Compute the visible range from `height` and `itemHeight` (do not render all items)
 *   - Each visible row has data-testid="row"
 *
 * Time budget: ~35 minutes.
 */

export function VirtualList({
  items,
  height,
  itemHeight,
}: {
  items: string[];
  height: number;
  itemHeight: number;
}): JSX.Element {
  throw new Error('not implemented');
}

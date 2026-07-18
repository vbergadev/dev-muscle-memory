/**
 * Exercise: List with correct keys
 *
 * Goal: Render items ({ id: number; label: string }[]) as a <ul> of <li>, using the stable id as the React key (never the array index).
 *
 * Prerequisites:
 *   - rendering lists with map
 *   - why keys must be stable and unique
 *
 * References:
 *   - https://react.dev/learn/rendering-lists
 *
 * Rules:
 *   - Render each item as an <li> with its label as text
 *   - Use item.id as the key
 *
 * Time budget: ~12 minutes.
 */

export function ItemList({ items }: { items: { id: number; label: string }[] }): JSX.Element {
  throw new Error('not implemented');
}

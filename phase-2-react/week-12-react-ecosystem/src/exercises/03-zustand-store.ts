/**
 * Exercise: Global state with Zustand
 *
 * Goal: Implement makeCounterStore(): a Zustand store (via create) with state { count: number; inc: () => void; reset: () => void }. count starts at 0; inc adds 1; reset sets it back to 0.
 *
 * Prerequisites:
 *   - zustand create + set
 *   - reading state with getState()
 *   - why a store hook is both a hook and an object
 *
 * References:
 *   - https://github.com/pmndrs/zustand
 *
 * Time budget: ~18 minutes.
 */

import { create } from 'zustand';
import type { StoreApi, UseBoundStore } from 'zustand';

export type CounterState = { count: number; inc: () => void; reset: () => void };

// Implement the store inside this factory using `create<CounterState>((set) => ({ ... }))`.
export function makeCounterStore(): UseBoundStore<StoreApi<CounterState>> {
  void create;
  throw new Error('not implemented');
}

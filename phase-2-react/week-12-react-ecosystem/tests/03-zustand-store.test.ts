import { describe, it, expect } from 'vitest';
import { makeCounterStore } from '../src/exercises/03-zustand-store';

describe('makeCounterStore', () => {
  it('starts at 0 and increments', () => {
    const useStore = makeCounterStore();
    expect(useStore.getState().count).toBe(0);
    useStore.getState().inc();
    expect(useStore.getState().count).toBe(1);
  });

  it('resets to 0', () => {
    const useStore = makeCounterStore();
    useStore.getState().inc();
    useStore.getState().reset();
    expect(useStore.getState().count).toBe(0);
  });
});

/**
 * Exercise: State reducer pattern
 *
 * Goal: A useToggle(reducer?) hook. Internally it reduces { on } over a { type: "toggle" } action. If the consumer passes a custom reducer, it overrides how the state changes — letting them veto or alter transitions (inversion of control).
 *
 * Prerequisites:
 *   - useReducer
 *   - the state reducer pattern (inversion of control)
 *   - optional reducer override
 *
 * References:
 *   - https://kentcdodds.com/blog
 *
 * Time budget: ~25 minutes.
 */

export type ToggleState = { on: boolean };
export type ToggleAction = { type: 'toggle' };

export function useToggle(
  reducer?: (state: ToggleState, action: ToggleAction) => ToggleState,
): { on: boolean; toggle: () => void } {
  throw new Error('not implemented');
}

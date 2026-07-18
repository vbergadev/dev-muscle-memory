/**
 * Exercise: Theme provider with Context
 *
 * Goal: Provide a theme via Context. Export a ThemeProvider component and a useTheme() hook returning { theme: "light" | "dark"; toggle: () => void }. Theme starts as "light".
 *
 * Prerequisites:
 *   - createContext / useContext
 *   - a provider component wrapping children
 *   - reading context via a custom hook
 *
 * References:
 *   - https://react.dev/learn/passing-data-deeply-with-context
 *
 * Time budget: ~20 minutes.
 */

import type { ReactNode } from 'react';

export function ThemeProvider({ children }: { children: ReactNode }): JSX.Element {
  throw new Error('not implemented');
}

export function useTheme(): { theme: 'light' | 'dark'; toggle: () => void } {
  throw new Error('not implemented');
}

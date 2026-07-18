/**
 * Exercise: Compound components — Tabs
 *
 * Goal: Build <Tabs> with subcomponents Tabs.List, Tabs.Tab (index) and Tabs.Panel (index). The active tab starts at 0. Clicking a Tab shows its matching Panel and hides the others. Share the active index via context.
 *
 * Prerequisites:
 *   - compound components + React context
 *   - static subcomponents via Object.assign
 *   - conditional rendering of the active panel
 *
 * References:
 *   - https://kentcdodds.com/blog
 *   - https://react.dev/learn/passing-data-deeply-with-context
 *
 * Rules:
 *   - Only the active Panel should be in the DOM
 *
 * Time budget: ~30 minutes.
 */

import type { ReactNode } from 'react';

type TabsType = ((props: { children: ReactNode }) => JSX.Element) & {
  List: (props: { children: ReactNode }) => JSX.Element;
  Tab: (props: { index: number; children: ReactNode }) => JSX.Element;
  Panel: (props: { index: number; children: ReactNode }) => JSX.Element;
};

export const Tabs: TabsType = Object.assign(
  (_props: { children: ReactNode }): JSX.Element => {
    throw new Error('not implemented');
  },
  {
    List: (_props: { children: ReactNode }): JSX.Element => {
      throw new Error('not implemented');
    },
    Tab: (_props: { index: number; children: ReactNode }): JSX.Element => {
      throw new Error('not implemented');
    },
    Panel: (_props: { index: number; children: ReactNode }): JSX.Element => {
      throw new Error('not implemented');
    },
  },
);

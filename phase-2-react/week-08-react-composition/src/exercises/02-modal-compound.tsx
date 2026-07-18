/**
 * Exercise: Compound Modal (Header/Body/Footer)
 *
 * Goal: Build a compound component: <Modal> with subcomponents Modal.Header, Modal.Body and Modal.Footer. Each renders its children in the right region.
 *
 * Prerequisites:
 *   - compound components
 *   - attaching subcomponents as static properties
 *   - composition over configuration
 *
 * References:
 *   - https://react.dev/learn/passing-props-to-a-component
 *
 * Time budget: ~25 minutes.
 */

import type { ReactNode } from 'react';

type Slot = (props: { children: ReactNode }) => JSX.Element;

type ModalType = ((props: { children: ReactNode }) => JSX.Element) & {
  Header: Slot;
  Body: Slot;
  Footer: Slot;
};

export const Modal: ModalType = Object.assign(
  (_props: { children: ReactNode }): JSX.Element => {
    throw new Error('not implemented');
  },
  {
    Header: (_props: { children: ReactNode }): JSX.Element => {
      throw new Error('not implemented');
    },
    Body: (_props: { children: ReactNode }): JSX.Element => {
      throw new Error('not implemented');
    },
    Footer: (_props: { children: ReactNode }): JSX.Element => {
      throw new Error('not implemented');
    },
  },
);

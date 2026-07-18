import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Toggle } from '../src/exercises/02-headless-toggle';

describe('Toggle (headless)', () => {
  it('passes state to the render prop and toggles', async () => {
    const user = userEvent.setup();
    render(<Toggle>{({ on, toggle }) => <button onClick={toggle}>{on ? 'ON' : 'OFF'}</button>}</Toggle>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveTextContent('OFF');
    await user.click(btn);
    expect(btn).toHaveTextContent('ON');
  });
});

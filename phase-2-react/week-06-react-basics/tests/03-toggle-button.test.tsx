import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ToggleButton } from '../src/exercises/03-toggle-button';

describe('ToggleButton', () => {
  it('toggles OFF -> ON -> OFF', async () => {
    const user = userEvent.setup();
    render(<ToggleButton />);
    const btn = screen.getByRole('button');
    expect(btn).toHaveTextContent('OFF');
    await user.click(btn);
    expect(btn).toHaveTextContent('ON');
    await user.click(btn);
    expect(btn).toHaveTextContent('OFF');
  });
});

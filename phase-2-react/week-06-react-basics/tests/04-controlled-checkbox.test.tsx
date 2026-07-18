import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ControlledCheckbox } from '../src/exercises/04-controlled-checkbox';

describe('ControlledCheckbox', () => {
  it('toggles checked state', async () => {
    const user = userEvent.setup();
    render(<ControlledCheckbox />);
    const cb = screen.getByRole('checkbox');
    expect(cb).not.toBeChecked();
    await user.click(cb);
    expect(cb).toBeChecked();
  });
});

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FocusInput } from '../src/exercises/02-focus-input';

describe('FocusInput', () => {
  it('focuses the input automatically on mount', () => {
    render(<FocusInput />);
    expect(screen.getByRole('textbox')).toHaveFocus();
  });

  it('refocuses the input when the button is clicked', async () => {
    const user = userEvent.setup();
    render(<FocusInput />);
    const input = screen.getByRole('textbox');
    input.blur();
    expect(input).not.toHaveFocus();
    await user.click(screen.getByRole('button'));
    expect(input).toHaveFocus();
  });
});

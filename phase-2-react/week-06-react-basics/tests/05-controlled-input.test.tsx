import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ControlledInput } from '../src/exercises/05-controlled-input';

describe('ControlledInput', () => {
  it('echoes the typed value', async () => {
    const user = userEvent.setup();
    render(<ControlledInput />);
    const input = screen.getByRole('textbox');
    await user.type(input, 'hello');
    expect(input).toHaveValue('hello');
    expect(screen.getByTestId('echo')).toHaveTextContent('hello');
  });
});

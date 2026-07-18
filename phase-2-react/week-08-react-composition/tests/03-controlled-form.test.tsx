import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ControlledForm } from '../src/exercises/03-controlled-form';

describe('ControlledForm', () => {
  it('shows a required error on empty submit', async () => {
    const user = userEvent.setup();
    render(<ControlledForm />);
    await user.click(screen.getByRole('button', { name: /submit/i }));
    expect(screen.getByText(/required/i)).toBeInTheDocument();
  });

  it('submits when the field is filled', async () => {
    const user = userEvent.setup();
    render(<ControlledForm />);
    await user.type(screen.getByRole('textbox', { name: /name/i }), 'Ada');
    await user.click(screen.getByRole('button', { name: /submit/i }));
    expect(screen.getByText(/submitted/i)).toBeInTheDocument();
  });
});

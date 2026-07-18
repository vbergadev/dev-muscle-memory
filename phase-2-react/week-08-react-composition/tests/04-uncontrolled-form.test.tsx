import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UncontrolledForm } from '../src/exercises/04-uncontrolled-form';

describe('UncontrolledForm', () => {
  it('reads the ref value on submit', async () => {
    const user = userEvent.setup();
    render(<UncontrolledForm />);
    await user.type(screen.getByRole('textbox', { name: /username/i }), 'neo');
    await user.click(screen.getByRole('button'));
    expect(screen.getByTestId('result')).toHaveTextContent('neo');
  });
});

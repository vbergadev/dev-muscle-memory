import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LiftingState } from '../src/exercises/05-lifting-state';

describe('LiftingState', () => {
  it('mirrors typing between the two inputs', async () => {
    const user = userEvent.setup();
    render(<LiftingState />);
    const a = screen.getByRole('textbox', { name: /^a$/i });
    const b = screen.getByRole('textbox', { name: /^b$/i });
    await user.type(a, 'sync');
    expect(b).toHaveValue('sync');
  });
});

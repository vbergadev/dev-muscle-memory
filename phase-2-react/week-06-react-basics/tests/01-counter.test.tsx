import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from '../src/exercises/01-counter';

describe('Counter', () => {
  it('starts at 0', () => {
    render(<Counter />);
    expect(screen.getByTestId('count')).toHaveTextContent('0');
  });

  it('increments on click', async () => {
    const user = userEvent.setup();
    render(<Counter />);
    await user.click(screen.getByRole('button'));
    expect(screen.getByTestId('count')).toHaveTextContent('1');
  });
});

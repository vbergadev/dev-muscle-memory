import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TodoList } from '../src/exercises/02-todo-list';

describe('TodoList', () => {
  it('adds typed items to the list', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    const input = screen.getByRole('textbox');
    const add = screen.getByRole('button', { name: /add/i });
    await user.type(input, 'buy milk');
    await user.click(add);
    await user.type(input, 'walk dog');
    await user.click(add);
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
    expect(screen.getByText('buy milk')).toBeInTheDocument();
  });
});

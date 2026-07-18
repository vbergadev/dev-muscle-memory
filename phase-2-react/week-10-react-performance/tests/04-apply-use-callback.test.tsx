import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchBox } from '../src/exercises/04-apply-use-callback';

describe('SearchBox', () => {
  it('filters items by substring', async () => {
    const user = userEvent.setup();
    render(<SearchBox items={['apple', 'banana', 'cherry']} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
    await user.type(screen.getByRole('textbox'), 'an');
    expect(screen.getAllByRole('listitem')).toHaveLength(1);
    expect(screen.getByText('banana')).toBeInTheDocument();
  });
});

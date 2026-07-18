import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Panel } from '../src/exercises/01-card-children';

describe('Panel', () => {
  it('renders header and children', () => {
    render(<Panel header={<h2>My header</h2>}>the body</Panel>);
    expect(screen.getByRole('heading', { name: 'My header' })).toBeInTheDocument();
    expect(screen.getByText('the body')).toBeInTheDocument();
  });
});

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from '../src/exercises/06-card';

describe('Card', () => {
  it('renders the title as a heading and the children', () => {
    render(<Card title="Hello">Body content</Card>);
    expect(screen.getByRole('heading')).toHaveTextContent('Hello');
    expect(screen.getByText('Body content')).toBeInTheDocument();
  });
});

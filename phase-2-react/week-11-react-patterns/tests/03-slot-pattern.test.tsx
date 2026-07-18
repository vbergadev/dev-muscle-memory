import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Layout } from '../src/exercises/03-slot-pattern';

describe('Layout (slots)', () => {
  it('renders every slot', () => {
    render(
      <Layout header={<h1>Head</h1>} sidebar={<nav>Side</nav>}>
        Main content
      </Layout>,
    );
    expect(screen.getByRole('heading', { name: 'Head' })).toBeInTheDocument();
    expect(screen.getByText('Side')).toBeInTheDocument();
    expect(screen.getByText('Main content')).toBeInTheDocument();
  });
});

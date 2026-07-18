import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Modal } from '../src/exercises/02-modal-compound';

describe('Modal (compound)', () => {
  it('renders header, body and footer', () => {
    render(
      <Modal>
        <Modal.Header>Title here</Modal.Header>
        <Modal.Body>Body here</Modal.Body>
        <Modal.Footer>Footer here</Modal.Footer>
      </Modal>,
    );
    expect(screen.getByText('Title here')).toBeInTheDocument();
    expect(screen.getByText('Body here')).toBeInTheDocument();
    expect(screen.getByText('Footer here')).toBeInTheDocument();
  });
});

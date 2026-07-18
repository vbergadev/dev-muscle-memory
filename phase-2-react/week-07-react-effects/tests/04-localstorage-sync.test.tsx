import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LocalStorageSync } from '../src/exercises/04-localstorage-sync';

const KEY = 'week07-test';

describe('LocalStorageSync', () => {
  beforeEach(() => localStorage.clear());

  it('initializes the input from localStorage', () => {
    localStorage.setItem(KEY, 'hello');
    render(<LocalStorageSync storageKey={KEY} />);
    expect(screen.getByRole('textbox')).toHaveValue('hello');
  });

  it('persists typed value to localStorage', async () => {
    const user = userEvent.setup();
    render(<LocalStorageSync storageKey={KEY} />);
    await user.type(screen.getByRole('textbox'), 'abc');
    expect(localStorage.getItem(KEY)).toBe('abc');
  });

  it('starts empty when nothing is stored', () => {
    render(<LocalStorageSync storageKey={KEY} />);
    expect(screen.getByRole('textbox')).toHaveValue('');
  });
});

import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Child } from '../src/exercises/02-apply-memo';

describe('Child (memo)', () => {
  it('does not re-render when props are unchanged', () => {
    const onRender = vi.fn();
    const { rerender } = render(<Child label="x" onRender={onRender} />);
    expect(onRender).toHaveBeenCalledTimes(1);
    rerender(<Child label="x" onRender={onRender} />);
    expect(onRender).toHaveBeenCalledTimes(1);
    rerender(<Child label="y" onRender={onRender} />);
    expect(onRender).toHaveBeenCalledTimes(2);
  });
});

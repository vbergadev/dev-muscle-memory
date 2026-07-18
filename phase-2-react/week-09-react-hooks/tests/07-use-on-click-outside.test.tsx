import { describe, it, expect, vi } from 'vitest';
import { useRef } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useOnClickOutside } from '../src/exercises/07-use-on-click-outside';

function Harness({ onOutside }: { onOutside: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, onOutside);
  return (
    <div>
      <div ref={ref} data-testid="inside">inside</div>
      <button>outside</button>
    </div>
  );
}

describe('useOnClickOutside', () => {
  it('fires only for clicks outside the ref', async () => {
    const user = userEvent.setup();
    const handler = vi.fn();
    render(<Harness onOutside={handler} />);
    await user.click(screen.getByTestId('inside'));
    expect(handler).not.toHaveBeenCalled();
    await user.click(screen.getByRole('button'));
    expect(handler).toHaveBeenCalled();
  });
});

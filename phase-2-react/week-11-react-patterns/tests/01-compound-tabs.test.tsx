import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tabs } from '../src/exercises/01-compound-tabs';

describe('Tabs (compound)', () => {
  it('shows the active panel and switches on tab click', async () => {
    const user = userEvent.setup();
    render(
      <Tabs>
        <Tabs.List>
          <Tabs.Tab index={0}>First</Tabs.Tab>
          <Tabs.Tab index={1}>Second</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel index={0}>Panel one</Tabs.Panel>
        <Tabs.Panel index={1}>Panel two</Tabs.Panel>
      </Tabs>,
    );
    expect(screen.getByText('Panel one')).toBeInTheDocument();
    expect(screen.queryByText('Panel two')).not.toBeInTheDocument();
    await user.click(screen.getByText('Second'));
    expect(screen.getByText('Panel two')).toBeInTheDocument();
    expect(screen.queryByText('Panel one')).not.toBeInTheDocument();
  });
});

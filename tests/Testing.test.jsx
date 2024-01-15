import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Testing from '../src/components/Testing';

describe('Testing component', () => {
  it('renders magnificent monkeys', () => {
    // since screen does not have the container property, we'll destructure render to obtain a container for this test
    const { container } = render(<Testing />);
    expect(container).toMatchSnapshot();
  });

  it('renders radical rhinos after button click', async () => {
    const user = userEvent.setup();

    render(<Testing />);
    const button = screen.getByRole('button', { name: 'Click Me' });

    await user.click(button);

    expect(screen.getByRole('heading').textContent).toMatch(/radical rhinos/i);
  });
});

// This is just and example of how to use Jest and React Testing Library to test a component
// Delete this file when you're ready to write your own tests

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
  render(<Home />);

  it('renders the heading', () => {
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});

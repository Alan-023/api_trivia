// This is just an example of how to use snapshot testing with Jest and React Testing Library
// Delete this file and __snapshots__ folder when you're ready to write your own tests

import { render } from '@testing-library/react';
import Home from '@/app/page';

it('renders homepage unchanged', () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});

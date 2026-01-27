import { act, render, screen } from '@testing-library/react';
import Home from './pages/home';

test('shows loading screen then home content', () => {
  jest.useFakeTimers();

  render(<Home />);
  expect(screen.getByAltText(/Emeka/i)).toBeInTheDocument();

  act(() => {
    jest.runAllTimers();
  });

  expect(screen.getByText(/I'm Emeka/i)).toBeInTheDocument();
  jest.useRealTimers();
});

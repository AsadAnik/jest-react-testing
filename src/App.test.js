import { render, screen } from '@testing-library/react';
import App from './App';

test('First Testing with react and jest', () => {
    expect((2 + 1)).toBe(3);
    expect(4 + 1).toBe(5);
});


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

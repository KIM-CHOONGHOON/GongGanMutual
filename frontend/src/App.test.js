import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
test('renders login heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  const heading = screen.getByText(/로그인/i);
  expect(heading).toBeInTheDocument();
});

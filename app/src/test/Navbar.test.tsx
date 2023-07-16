import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from 'src/components/Navbar';

test('Menu option Apresentação', () => {
  render(<Navbar />);
  const linkElement = screen.getByText(/Apresentação/i);
  expect(linkElement).toBeInTheDocument();
});

test("Menu option Contato", () => {
  render(<Navbar />);
  const linkElement = screen.getByText(/Contato/i);
  expect(linkElement).toBeInTheDocument();
});
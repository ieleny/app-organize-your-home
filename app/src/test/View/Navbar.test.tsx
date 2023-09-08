import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import Navbar from 'src/components/Navbar';

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

test("Render navbar", async () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

  const linkElement = await screen.findByText(/Planeje os custos da obra/i);
  expect(linkElement).toBeInTheDocument();
});


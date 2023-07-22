import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import Navbar from 'src/components/Navbar';

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

test("Menu option Apresentação", async () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

  const linkElement = await waitFor(() => screen.getByText(/Apresentação/i));
  expect(linkElement).toBeInTheDocument();
});

test("Menu option Contato", async () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  const linkElement = await waitFor(() => screen.getByText(/Contato/i));
  expect(linkElement).toBeInTheDocument();
});

test("Menu option Inserir", async () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

  const linkElement = await waitFor(() => screen.getByText(/Inserir/i));
  expect(linkElement).toBeInTheDocument();
});

test("Menu option Listar", async () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  const linkElement = await waitFor(() => screen.getByText(/Listar/i));
  expect(linkElement).toBeInTheDocument();
});
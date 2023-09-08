import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SideBar from "src/components/SideBar";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

test("Sidebar option Inserir", async () => {
  render(
    <BrowserRouter>
      <SideBar />
    </BrowserRouter>
  );

  const linkElement = await screen.findByText(/Inserir/i);
  expect(linkElement).toBeInTheDocument();
});


test("Sidebar option Listar", async () => {
  render(
    <BrowserRouter>
      <SideBar />
    </BrowserRouter>
  );
  const linkElement = await screen.findByText(/Listar/i);
  expect(linkElement).toBeInTheDocument();
});

import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MaterialAddListView from "src/pages/Presentation/Material/View/Add/MaterialAddView";

describe("Component Material add view", () => {
    
  beforeEach(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });
    
  test("Is render Material add view", async () => {
    render(
      <BrowserRouter>
        <MaterialAddListView />
      </BrowserRouter>
    );

    const linkElement = await screen.findByText(
      /Adicione seus gastos com a construção/i
    );
    expect(linkElement).toBeInTheDocument();
  });
});

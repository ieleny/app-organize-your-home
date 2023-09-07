import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ManagementSystem from "src/pages/Layout/ManagementSystem";

describe("Management System", () => {
  test("The page is render", async () => {
    render(
      <BrowserRouter>
        <ManagementSystem />
      </BrowserRouter>
    );

    const linkElement = await screen.findByText(
      /Planeje financeiramente a sua construção @2023/i
    );
    expect(linkElement).toBeInTheDocument();
  });
});

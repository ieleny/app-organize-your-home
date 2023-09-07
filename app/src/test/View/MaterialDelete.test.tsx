import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Delete from "src/pages/Presentation/Material/View/Delete/MaterialDelete";
import MaterialDeleteViewModel from "src/pages/Presentation/Material/View/Delete/MaterialDeleteViewModel";
import { MaterialController } from "src/pages/Data/Store/MaterialController";

describe("Component Material delete", () => {
  test("Is render Material delete", async () => {
    render(
      <BrowserRouter>
        <Delete materialId={0} />
      </BrowserRouter>
    );

    const linkElement = await screen.findByText(
      /Delete/i
    );
    expect(linkElement).toBeInTheDocument();
  });
    
  test("The material was deleted", async () => {
    const materialDeleteViewModel = new MaterialDeleteViewModel(); 
    const materialController = new MaterialController();
      
    const key = 0;
    await materialDeleteViewModel.deleteMaterial(0);

    const listMaterial = materialController.listMaterialId(key);
    expect(listMaterial).toEqual(undefined);
  });
});

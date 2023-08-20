import { MaterialModel } from "src/pages/Data/Model/MaterialModel";
import { MaterialType } from "src/types/material";
import { MaterialController } from "src/pages/Data/Store/MaterialController";
import { IMaterialSave } from "src/interface/IMaterialSave";

export default class MaterialEditViewModel {
  private materialModel = new MaterialModel();
  private materialController = new MaterialController();

  public editMaterialList({ materiais }: MaterialType) {
    this.materialController.addMaterial({ materiais });
  }

  public save = ({ productName, quantityBought, priceUnd }: IMaterialSave) => {
    // TODO: IMPLEMENTS EDIMATERIAL
    console.info("edit material");
  };
}

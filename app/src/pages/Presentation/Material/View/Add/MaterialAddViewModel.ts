import { MaterialModel } from "src/pages/Data/Model/MaterialModel";
import { MaterialType } from "src/types/material";
import { MaterialController } from "src/pages/Data/Store/MaterialController";
import IStrategy from "src/strategy/IStrategy";
import { IMaterialSave } from "src/interface/IMaterialSave";

export default class MaterialAddViewModel implements IStrategy {
  private materialModel = new MaterialModel();
  private materialController = new MaterialController();

  public addMaterialList({ materiais }: MaterialType) {
    try {
      this.materialController.addMaterial({ materiais });
    } catch (e) {
      console.log(e);
    }
  }

  public save = ({ productName, quantityBought, priceUnd }: IMaterialSave) => {
    const countMaterial = this.materialModel.amountMaterial();

    this.addMaterialList({
      materiais: { key: countMaterial, quantityBought, productName, priceUnd },
    });
  };
}

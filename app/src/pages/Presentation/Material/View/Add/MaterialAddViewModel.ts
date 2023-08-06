import { MaterialModel } from "src/pages/Presentation/Material/Model/MaterialModel";
import { MaterialProps } from "src/types/material";
import { MaterialController } from "src/pages/Presentation/Material/Store/MaterialController";

export default class MaterialAddViewModel {
  private materialModel = new MaterialModel();
  private materialController = new MaterialController();

  public addMaterialList({ materiais }: MaterialProps) {
    this.materialController.addMaterial({ materiais });
  }

  public saveMaterial = () => {
    const quantityBought = this.materialModel.quantityBought;
    const productName = this.materialModel.productName;
    const priceUnd = this.materialModel.priceUnd;

    this.addMaterialList({
      materiais: { key: 1, quantityBought, productName, priceUnd },
    });
  };

  public onchangeQuantityBought = (quantityBought: number | null) => {
    if (quantityBought) {
      this.materialModel.quantityBought = quantityBought;
    }
  };

  public onchangeProductName = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const productNameChange = event;

    if (productNameChange) {
      this.materialModel.productName = productNameChange.target.value;
    }
  };

  public onchangePriceUnd = (priceUnd: string | null) => {
    if (priceUnd) {
      this.materialModel.priceUnd = priceUnd;
    }
  };
}

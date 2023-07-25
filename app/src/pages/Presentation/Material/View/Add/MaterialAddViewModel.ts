import { MaterialModel } from "src/pages/Presentation/Material/Model/MaterialModel";
import { MaterialProps } from "src/types/material";
import { MaterialStore } from "src/pages/Presentation/Material/Store/MaterialStore";

export default class MaterialAddViewModel {
  private materialModel = new MaterialModel();
  private materialStore = new MaterialStore();

  addMaterialList({ materiais }: MaterialProps) {
    this.materialStore.addMaterial({ materiais });
  }

  listMaterial() {
    return this.materialStore.listMaterial();
  }

  saveMaterial = () => {
    const quantityBought = this.materialModel.quantityBought;
    const productName = this.materialModel.productName;
    const priceUnd = this.materialModel.priceUnd;

    this.addMaterialList({
      materiais: { quantityBought, productName, priceUnd },
    });
  };

  onchangeQuantityBought = (quantityBought: number | null) => {
    if (quantityBought) {
      this.materialModel.quantityBought = quantityBought;
    }
  };

  onchangeProductName = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const productNameChange = event;

    if (productNameChange) {
      this.materialModel.productName = productNameChange.target.value;
    }
  };

  onchangePriceUnd = (
    priceUnd: string | null
  ) => {
    if (priceUnd) {
      this.materialModel.priceUnd = priceUnd;
    }
  };
}

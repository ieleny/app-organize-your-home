import { MaterialModel } from "src/pages/Data/Model/MaterialModel";

export default class MaterialFormViewModel {
  private materialModel = new MaterialModel();

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

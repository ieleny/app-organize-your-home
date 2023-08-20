import { MaterialModel } from "src/pages/Data/Model/MaterialModel";
import Context from "src/strategy/Context";
import IStrategy from "src/strategy/IStrategy";

export default class MaterialFormViewModel {
  private materialModel = new MaterialModel();

  public onchangeQuantityBought = (quantityBought: number | null) => {
    if (quantityBought !== null) {
      this.materialModel.quantityBought = quantityBought;
    }
  };

  public onchangeProductName = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const productNameChange = event;

    if (productNameChange !== null) {
      this.materialModel.productName = productNameChange.target.value;
    }
  };

  public onchangePriceUnd = (priceUnd: string | null) => {
    if (priceUnd !== null) {
      this.materialModel.priceUnd = priceUnd;
    }
  };

  public saveMaterial = (MaterialViewModel: IStrategy) => {
    const context = new Context(MaterialViewModel);
    context.save({
      productName: this.materialModel.productName,
      quantityBought: this.materialModel.quantityBought,
      priceUnd: this.materialModel.priceUnd
    });
  };
}

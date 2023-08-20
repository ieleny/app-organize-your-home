import { MaterialModel } from "src/pages/Data/Model/MaterialModel";
import MaterialService from "src/pages/Data/Service/MaterialService";
import { MaterialController } from "src/pages/Data/Store/MaterialController";

export default class MaterialFormViewModel {
  public materialModel = new MaterialModel();
  private materialService = new MaterialService();
  private materialController = new MaterialController();

  public searchMaterialById = (key: number) => {
    return this.materialController.listMaterialId(key);
  };

  public onchangeProductName = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const productNameChange = event;

    if (productNameChange !== null) {
      this.materialModel.productName = productNameChange.target.value;
    }
  };

  public onchangeQuantityBought = (quantityBought: number | null) => {
    if (quantityBought !== null) {
      this.materialModel.quantityBought = quantityBought;
    }
  };

  public onchangePriceUnd = (priceUnd: string | null) => {
    if (priceUnd !== null) {
      this.materialModel.priceUnd = priceUnd;
    }
  };

  public saveRequest = (key: number | undefined) => {
    return this.materialService.save({
      key: key,
      productName: this.materialModel.productName,
      quantityBought: this.materialModel.quantityBought,
      priceUnd: this.materialModel.priceUnd,
    });
  };
}

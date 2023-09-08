import { MaterialModel } from "src/pages/Data/Model/MaterialModel";
import { MaterialController } from "src/pages/Data/Store/MaterialController";
import { IMaterialSave } from "src/interface/IMaterialSave";

export default class MaterialService {
  private materialModel = new MaterialModel();
  private materialController = new MaterialController();

  public save = ({
    key,
    productName,
    quantityBought,
    priceUnd,
  }: IMaterialSave) => {
    if (key !== undefined) {
      this.edit({ key, productName, quantityBought, priceUnd });
    } else {
      this.create({ productName, quantityBought, priceUnd });
    }
  };

  public create = ({
    productName,
    quantityBought,
    priceUnd,
  }: IMaterialSave) => {
    const countMaterial = this.materialModel.amountMaterial();
    this.materialController.addMaterial({
      materiais: { key: countMaterial, quantityBought, productName, priceUnd },
    });
  };

  public edit = ({
    key,
    productName,
    quantityBought,
    priceUnd,
  }: IMaterialSave) => {
    this.materialController.editMaterial({
      materiais: { key: key ?? 0, quantityBought, productName, priceUnd },
    });
  };

  public delete = (key: number) => {
    this.materialController.deleteMaterial(key);
  };

  public list = () => {
    return this.materialController.listMaterial();
  };

  public countMaterials = () => {
    return this.materialController.countMaterials();
  };
}

import { MaterialModel } from "src/pages/Presentation/Material/Model/MaterialModel";

export default class ListViewModel {
  materialModel = new MaterialModel();

  addMaterialList() {
    this.materialModel.addMaterial({ values: ["Tokyo", "Kyoto", "Osaka"] });
  }

  listMaterial() {
    return this.materialModel.listMaterial();
  }
}

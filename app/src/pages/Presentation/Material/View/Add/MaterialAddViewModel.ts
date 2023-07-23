import { MaterialModel } from "src/pages/Presentation/Material/Model/MaterialModel";

export default class ListViewModel {
  materialModel = new MaterialModel();

  addMaterialList() {
    this.materialModel.addMaterial(["Tokyo", "Kyoto", "Osaka"]);
  }

  listMaterial() {
    this.materialModel.listMaterial();
  }
}

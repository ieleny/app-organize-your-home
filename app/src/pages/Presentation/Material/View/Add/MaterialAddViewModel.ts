import { MaterialModel } from "src/pages/Presentation/Material/Model/MaterialModel";
import { MaterialProps } from "src/types/material";

export default class ListViewModel {
  materialModel = new MaterialModel();

  addMaterialList({ materiais }: MaterialProps) {
    this.materialModel.addMaterial({ materiais });
  }

  listMaterial() {
    return this.materialModel.listMaterial();
  }
}

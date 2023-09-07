import { MaterialController } from "src/pages/Data/Store/MaterialController";

export default class MaterialListViewModel {
  private materialController = new MaterialController();

  listMaterial() {
    return this.materialController.listMaterial();
  }
}

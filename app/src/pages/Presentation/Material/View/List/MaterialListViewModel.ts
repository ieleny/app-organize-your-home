import { MaterialController } from "src/pages/Presentation/Material/Store/MaterialController";

export default class MaterialListViewModel {
  private materialController = new MaterialController();

  listMaterial() {
    return this.materialController.listMaterial();
  }
}

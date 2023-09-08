import MaterialService from "src/pages/Data/Service/MaterialService";

export default class MaterialDeleteViewModel {
  private materialService = new MaterialService();

  deleteMaterial(materialId: number) {
    try {
      this.materialService.delete(materialId);
    } catch (error) {
      console.warn(error);
    }
  }

  listQuantity() {
    return this.materialService.countMaterials();
  }
}

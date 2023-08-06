import { MaterialController } from "src/pages/Presentation/Material/Store/MaterialController";

export default class MaterialListViewModel {
  private materialController = new MaterialController();

  public columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  listMaterial() {
    return [this.materialController.listMaterial()];
  }
}

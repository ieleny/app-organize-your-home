
import { atom, createStore } from "jotai";

export class MaterialModel {
  myStore = createStore();
  material = atom(["", "", ""]);

  addMaterial(values: [string, string, string]) {
    this.myStore.set(this.material, values);
  }

  listMaterial() {
    console.log("material", this.material);
    console.log("myStore", this.myStore);

    return this.myStore.get(this.material);
  }
}
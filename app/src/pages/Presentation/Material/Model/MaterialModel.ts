
import { atom, createStore } from "jotai";

type AppProps = {
  values: string[];
};

export class MaterialModel {
  myStore = createStore();
  material = atom(["teste"]);

  addMaterial({ values }: AppProps) {
    this.myStore.set(this.material, values);
  }

  listMaterial() {
    console.warn("material", this.material);
    console.warn("myStore", this.myStore.get(this.material));

    return this.myStore.get(this.material);
  }
}
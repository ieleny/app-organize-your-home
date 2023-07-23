
import { atom, createStore } from "jotai";
import { MaterialProps } from "src/types/material";

type AppProps = {
  materiais: { quantityBought: number };
};

export class MaterialModel {
  myStore = createStore();
  materiais = atom({ quantityBought: 0 });

  addMaterial({ materiais }: MaterialProps) {
    this.myStore.set(this.materiais, materiais);
  }

  listMaterial() {
    console.warn("material", this.materiais);
    console.warn("myStore", this.myStore.get(this.materiais));

    return this.myStore.get(this.materiais);
  }
}
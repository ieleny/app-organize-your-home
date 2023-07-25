import { atom, createStore } from "jotai";
import { MaterialProps } from "src/types/material";

export class MaterialStore
{
  myStore = createStore();
  materiais = atom({ quantityBought: 0 });

  addMaterial({ materiais }: MaterialProps) {
    this.myStore.set(this.materiais, materiais);
  }

  listMaterial() {
    return this.myStore.get(this.materiais);
  }
}

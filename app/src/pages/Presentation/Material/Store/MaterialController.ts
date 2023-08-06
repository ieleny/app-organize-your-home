import { MaterialType } from "src/types/material";
import { IMaterial } from "src/interface/materialInterface";
import { MateriaisAtom, store } from "./MateriasStore";

// dependency inversion
export class MaterialController {
  
  public addMaterial({ materiais }: MaterialType) {

    const arrayMaterials: IMaterial[] = [
      ...store.get(MateriaisAtom),
      materiais,
    ];

    store.set(MateriaisAtom, arrayMaterials);
  }

  public listMaterial() {
    return store.get(MateriaisAtom);
  }

  public countMaterials() {
    return store.get(MateriaisAtom).length;
  }

}

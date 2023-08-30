import { MaterialType } from "src/types/material";
import { IMaterial } from "src/interface/IMaterial";
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

  public editMaterial({ materiais }: MaterialType) {
    const materiaisUpdate = this.updateMaterial({ materiais });
    const arrayMaterials: IMaterial[] = [...materiaisUpdate];

    store.set(MateriaisAtom, arrayMaterials);
  }

  public listMaterial() {
    return store.get(MateriaisAtom);
  }

  public countMaterials() {
    return store.get(MateriaisAtom).length;
  }

  public listMaterialId(key: number) {
    return store.get(MateriaisAtom).find((material) => material.key === key);
  }

  public updateMaterial({ materiais }: MaterialType) {
    return store.get(MateriaisAtom).map((material) => {
      if (material.key === materiais.key) {
        return materiais;
      }

      return material;
    });
  }

  public deleteMaterial(key: number) {
    const newMaterial = store
      .get(MateriaisAtom)
      .filter((material) => material.key !== key);
    
    store.set(MateriaisAtom, newMaterial);
  }
}

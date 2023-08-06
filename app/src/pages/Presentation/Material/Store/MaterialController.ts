import { MaterialProps } from "src/types/material";
import { MateriaisAtom, store } from "./MateriasStore";

// dependency inversion
export class MaterialController {
  public addMaterial({ materiais }: MaterialProps) {
    store.set(MateriaisAtom, materiais);
  }

  public listMaterial() {
    return store.get(MateriaisAtom);
  }

}

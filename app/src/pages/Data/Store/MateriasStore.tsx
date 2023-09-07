import { atom, createStore } from "jotai";
import { IMaterial } from "src/interface/IMaterial";

export const store = createStore();
export const MateriaisAtom = atom<IMaterial[]>([]);

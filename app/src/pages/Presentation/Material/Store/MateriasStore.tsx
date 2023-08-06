import { atom, createStore } from "jotai";
import { IMaterial } from "src/interface/materialInterface";

export const store = createStore();
export const MateriaisAtom = atom<IMaterial[]>([]);

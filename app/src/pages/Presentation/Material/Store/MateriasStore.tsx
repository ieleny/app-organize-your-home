import { atom, createStore } from "jotai";

export const store = createStore();
export const MateriaisAtom = atom({
  key: 1,
  productName: "Test",
  quantityBought: 0,
  priceUnd: "0.00",
});

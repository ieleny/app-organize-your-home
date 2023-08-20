import { IMaterialSave } from "../interface/IMaterialSave";

export default interface IStrategy {
  save({ productName, quantityBought, priceUnd }: IMaterialSave): void;
}

import { IMaterialSave } from "src/interface/IMaterialSave";
import IStrategy from "src/strategy/IStrategy";

export default class Context implements IStrategy {
  private strategy: IStrategy;

  constructor(strategy: IStrategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: IStrategy) {
    this.strategy = strategy;
  }

  public save({ productName, quantityBought, priceUnd }: IMaterialSave): void {
    this.strategy.save({ productName, quantityBought, priceUnd });
  }

}
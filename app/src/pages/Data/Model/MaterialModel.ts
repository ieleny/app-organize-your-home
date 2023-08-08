export class MaterialModel {
  private _quantityBought: number = 0;
  private _productName: string = "";
  private _priceUnd: string = "1.0";
  public static COUNT_MATERIAL: number = 0;

  public get productName() {
    return this._productName;
  }

  public set productName(productName: string) {
    this._productName = productName;
  }

  public get quantityBought() {
    return this._quantityBought;
  }

  public set quantityBought(quantityBought: number) {
    this._quantityBought = quantityBought;
  }

  public get priceUnd() {
    return this._priceUnd;
  }

  public set priceUnd(priceUnd: string) {
    this._priceUnd = priceUnd;
  }

  public amountMaterial() {
    return MaterialModel.COUNT_MATERIAL++;
  }
}
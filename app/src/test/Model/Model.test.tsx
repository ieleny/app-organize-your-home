import { MaterialModel } from "src/pages/Data/Model/MaterialModel";


describe('Material model', () => {
  const materialModel = new MaterialModel();

  test("Attribute priceUnd", () => {
    materialModel.priceUnd = "1";
    expect(materialModel.priceUnd).toBe("1");
  });
    
  test("Attribute productName", () => {
    materialModel.productName = "Argamassa";
    expect(materialModel.productName).toBe("Argamassa");
  });
    
  test("Attribute quantityBought", () => {
    materialModel.quantityBought = 3;
    expect(materialModel.quantityBought).toBe(3);
  });
    
  test("Function amountMaterial", () => {
    expect(materialModel.amountMaterial()).toBe(0);
  });
});
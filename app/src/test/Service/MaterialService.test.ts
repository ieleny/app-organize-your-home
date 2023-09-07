import MaterialService from "src/pages/Data/Service/MaterialService";
import { MaterialController } from "src/pages/Data/Store/MaterialController";

describe("Material Service", () => {
    const materialService = new MaterialService();
    const materialController = new MaterialController();

    test("Test save material", async () => {
        const key = 0;
        await materialService.save({
            productName: "Argamassa teste",
            quantityBought: 2,
            priceUnd: "1",
        });

        const listMaterial = materialController.listMaterialId(key);
        expect(listMaterial?.productName).toBe("Argamassa teste");
    });

    test("Test edit material", async () => {
        const key = 0;
        await materialService.save({
            key: key,
            productName: "Argamassa teste 1",
            quantityBought: 2,
            priceUnd: "1",
        });

        const listMaterial = materialController.listMaterialId(key);
        expect(listMaterial?.productName).toBe("Argamassa teste 1");
    });

        
    test("Test delete material", async () => {
        const key = 0;
        await materialService.delete(0);

        const listMaterial = materialController.listMaterialId(key);
        expect(listMaterial).toEqual(undefined);
    });
});

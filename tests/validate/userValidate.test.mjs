import { userValidate } from "../../src/validation/userValidation.mjs";

describe("UserValidation", () => {
    const sut = userValidate;

    it("deve estar tudo ok", async () => {
        const request = {
            user: "novas",
            password: "é isso",
        };

        await expect(sut(request)).resolves.toMatchObject({
            success: true,
            data: request,
        });
    });

    it("O campo user é requerido", async () => {
        const request = {
            password: "meEscolhe",
        };

        await expect(sut(request)).resolves.toMatchObject({
            success: false,
            errors: ["Campo name é obrigatório"],
        });
    });

    it("O campo user não está vazio", async () => {
        const request = {
            user: "",
            password: "password",
        };

        await expect(sut(request)).resolves.toMatchObject({
            success: false,
            errors: ["Campo name é obrigatório"],
        });
    });

    it("O campo password é requerido", async () => {
        const request = {
            user: "boa",
        };

        await expect(sut(request)).resolves.toMatchObject({
            success: false,
            errors: ["Campo password é obrigatório"],
        });
    });

    it("O campo password não está vazio", async () => {
        const request = {
            user: "aoba",
            password: "",
        };

        await expect(sut(request)).resolves.toMatchObject({
            success: false,
            errors: ["Campo password é obrigatório"],
        });
    });
});

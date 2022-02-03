import { LoginService } from "../src/services/loginService.mjs";

describe("LoginService", () => {
    let sut;
    beforeEach(() => {
        sut = new LoginService();
    });

    it("deve ser logado com user como syscoin e senha como meEscolhe", () => {
        const result = sut.login({
            user: "syscoin",
            password: "meEscolhe",
        });

        expect(result).toMatchObject({
            success: true,
        });
    });
});

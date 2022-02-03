import { LoginService } from "../../src/services/loginService.mjs";

describe("LoginService", () => {
    let sut;
    let sutRequest;
    beforeEach(() => {
        sut = new LoginService();
        sutRequest = {
            user: "syscoin",
            password: "meEscolhe",
        };
    });

    it("deve ser logado com user como syscoin e senha como meEscolhe", () => {
        const result = sut.login(sutRequest);

        expect(result).toMatchObject({
            success: true,
        });
    });

    it("deve aparecer a mensagem caso o login seja um sucesso", () => {
        const result = sut.login(sutRequest);

        expect(result).toMatchObject({
            success: true,
            message:
                "Meu nome completo é Wesley Lira Carvalho. Eu quero essa vaga!",
        });
    });

    for (let i = 0; i < 3; i++) {
        const user = Math.random().toString(36).substring(6);

        it(`o objeto success deve ser falso caso o usuário #${i} não seja syscoin`, () => {
            const result = sut.login({ ...sutRequest, user });

            expect(result).toMatchObject({
                success: false,
            });
        });
    }

    for (let i = 0; i < 3; i++) {
        const user = Math.random().toString(36).substring(6);

        it(`o objeto success deve ser falso caso a senha do usuário #${i} não seja meEscolhe`, () => {
            const result = sut.login({ ...sutRequest, user });

            expect(result).toMatchObject({
                success: false,
            });
        });
    }

    it("deve aparecer uma mensagem se o usuário não estiver correto", () => {
        const user = Math.random().toString(36).substring(7);
        const result = sut.login({ ...sutRequest, user });

        expect(result).toMatchObject({
            success: false,
            message: "Credenciais erradas.",
        });
    });

    it("deve aparecer uma mensagem se a senha não estiver correta", () => {
        const user = Math.random().toString(36).substring(6);
        const result = sut.login({ ...sutRequest, user });

        expect(result).toMatchObject({
            success: false,
            message: "Credenciais erradas.",
        });
    });
});

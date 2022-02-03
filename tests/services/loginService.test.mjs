import { LoginService } from "../../src/services/loginService.mjs";
import jest from "jest-mock";

describe("LoginService", () => {
    let sut;
    let sutRequest;
    let validate;
    beforeEach(() => {
        validate = {
            execute: jest.fn(() => Promise.resolve({ success: true })),
        };
        sut = new LoginService(validate);
        sutRequest = {
            user: "syscoin",
            password: "meEscolhe",
        };
    });

    it("deve ser logado com user como syscoin e senha como meEscolhe", async () => {
        const result = await sut.login(sutRequest);

        expect(result).toMatchObject({
            success: true,
        });
    });

    it("deve aparecer a mensagem caso o login seja um sucesso", async () => {
        const result = await sut.login(sutRequest);

        expect(result).toMatchObject({
            success: true,
            message:
                "Meu nome completo é Wesley Lira Carvalho. Eu quero essa vaga!",
        });
    });

    for (let i = 0; i < 3; i++) {
        const user = Math.random().toString(36).substring(6);

        it(`o objeto success deve ser falso caso o usuário #${i} não seja syscoin`, async () => {
            const result = await sut.login({ ...sutRequest, user });

            expect(result).toMatchObject({
                success: false,
            });
        });
    }

    for (let i = 0; i < 3; i++) {
        const user = Math.random().toString(36).substring(6);

        it(`o objeto success deve ser falso caso a senha do usuário #${i} não seja meEscolhe`, async () => {
            const result = await sut.login({ ...sutRequest, user });

            expect(result).toMatchObject({
                success: false,
            });
        });
    }

    it("deve aparecer uma mensagem se o usuário não estiver correto", async () => {
        const user = Math.random().toString(36).substring(7);
        const result = await sut.login({ ...sutRequest, user });

        expect(result).toMatchObject({
            success: false,
            message: "Credenciais erradas.",
        });
    });

    it("deve aparecer uma mensagem se a senha não estiver correta", async () => {
        const user = Math.random().toString(36).substring(6);
        const result = await sut.login({ ...sutRequest, user });

        expect(result).toMatchObject({
            success: false,
            message: "Credenciais erradas.",
        });
    });

    it("deve chama o validator", async () => {
        await sut.login(sutRequest);

        expect(validate.execute.mock.calls.length).toBe(1);
    });

    it("deve chama o validator caso o success seja falso", async () => {
        validate.execute = jest.fn(() =>
            Promise.resolve({ success: false, flag: true })
        );
        const resul = await sut.login(sutRequest);

        expect(resul).toMatchObject({
            success: false,
            flag: true,
        });
    });
});

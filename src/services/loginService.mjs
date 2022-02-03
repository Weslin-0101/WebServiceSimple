import { getUser } from "../data/dataContext.mjs";

export class LoginService {
    constructor(validate) {
        this.validate = validate;
    }

    async login(data) {
        const isValid = await this.validate.execute(data);

        if (!isValid.success) {
            return isValid;
        }

        const user = getUser(data.user);

        if (!user || data.password !== user.password) {
            return {
                success: false,
                message: "Credenciais erradas.",
            };
        }

        return {
            success: true,
            message:
                "Meu nome completo é Wesley Lira Carvalho. Eu quero essa vaga!",
        };
    }
}

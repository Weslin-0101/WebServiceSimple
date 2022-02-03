import { Router } from "express";
import { userValidate } from "./validation/userValidation.mjs";
import { LoginService } from "./services/loginService.mjs";

const route = Router();

const loginService = new LoginService({
    execute: userValidate,
});

route.post("/provasyscoin", async (req, res) => {
    const data = req.query;
    const resul = await loginService.login(data);

    return res.status(200).json(resul);
});

route.get("/provasyscoin", async (req, res) => {
    const data = req.query;
    const resul = await loginService.login(data);

    return res.status(200).json(resul);
});

export { route };

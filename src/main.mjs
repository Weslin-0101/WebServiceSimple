import "dotenv/config";
import express from "express";
import { route } from "./routes.mjs";

const app = express();
app.use(express.json());
app.use(route);

app.get("/", (req, res) => {
    res.status(200).json({
        message: "AOBAAAAA",
    });
});

app.get("*", (req, res) => {
    return res.status(404).json({ message: "Página não encontrada" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`"Backend fluindo na porta ${port}...`);
});

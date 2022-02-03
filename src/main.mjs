import "dotenv/config";
import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "AOBAAAAA",
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`"Backend fluindo na porta ${port}...`);
});

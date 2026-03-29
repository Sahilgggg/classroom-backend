import express from "express";
const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
    console.log("HELLO ROUTE HIT");
    res.send("THIS IS MY SERVER");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
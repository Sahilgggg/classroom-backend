import express from "express";
import subjectsRouter from "./routes/subjects";
import cors from "cors";
const app = express();
const PORT = 5000;

app.use(
    cors({
        origin: process.env.FRONTEND_URL, // React app URL
        methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
        credentials: true, // allow cookies
    })
);

app.use(express.json());

app.use("/api/subjects", subjectsRouter);

app.get("/", (req, res) => {
    console.log("HELLO ROUTE HIT");
    res.send("THIS IS MY SERVER");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
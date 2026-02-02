import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend API is running 🚀");
});

app.get("/api/transactions", (req, res) => {
  res.json([
    {
       id: 1,
      name: "Septi",
      amount: "0.01",
      message: "Semoga bermanfaat",
      date: "2026-01-20"
    },
    {
      id: 2,
      name: "Anonim",
      amount: "0.05",
      message: "Untuk pendidikan",
      date: "2026-01-21"
    }
  ]);
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});

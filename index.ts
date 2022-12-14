import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute";
import publicRoute from "./routes/publicRoute";
require("dotenv").config();

const port = process.env.PORT || 5000;

const app = express();

app.use(express.urlencoded());
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use(UserRoute);
app.use(publicRoute);

app.get("/", (req, res) => {
  res.json({
    success: "ok",
  });
});

app.listen(port, () => {
  console.log(`server dijalankan di port ${port}`);
});

const express = require("express");
const colors = require("colors");
const donenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleWare");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the support desk API" });
});

app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

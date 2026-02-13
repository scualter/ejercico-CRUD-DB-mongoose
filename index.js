require("dotenv").config();
const express = require("express");
const connectDB = require("./config/config");

const app = express();

connectDB();

app.use(express.json());

app.use("/tasks", require("./routes/tasks"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

const express = require("express");
const port = 5000;
const app = express();
require("dotenv").config();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middlewares/not-found");
app.use(express.json());

app.use("/api/v1/tasks", tasks);

app.use(notFound);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(port, console.log("listening..."));
  } catch (error) {
    console.log(error);
  }
};

start();

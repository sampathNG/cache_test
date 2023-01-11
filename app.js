const express = require("express");
const createError = require("http-errors");
const morgan = require("morgan");
require("dotenv").config();
const connection = require("./database/config.js");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.get("/", async (req, res, next) => {
  res.send({ message: "Awesome it works 🐻" });
});
const NodeCache = require("node-cache");
const myCache = new NodeCache();
const todos = require("./database/db");

app.get("/", async (req, res, next) => {
  res.send({ message: "Ok api is working 🚀" });
});

app.post("/todo", async (req, res) => {
  try {
    const todo = new todos({
      // _id: req.body._id,
      title: req.body.title,
      body: req.body.body,
    });
    const data = await todos.insertMany(todo);
    res.send("todo created");
    console.log("todo created");
  } catch (err) {
    res.send(err);
    console.log(err);
  }
});

//
app.get("/todo", async (req, res) => {
  try {
    //
    if (myCache.has("uniqueKey")) {
      const cxz = myCache.get("uniqueKey").filter(function (ele) {
        return ele.body === "ramuk";
      });
      res.send("Result from cache : " + cxz);
      console.log(cxz);
    } else {
      const result = await todos.find();
      myCache.set("uniqueKey", result, 10);
      res.send("Result: " + result);
      console.log(result);
    }
  } catch (err) {
    res.send(err);
    console.log(err);
  }
});

app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));

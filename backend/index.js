import express from "express";
import bodyParser from "body-parser";

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/", (req, res) => {
  res.send("Hello welcome to the server");
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});

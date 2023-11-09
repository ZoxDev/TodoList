const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json()); //req.body

//middleware
app.use(cors());

//ROUTES//
app.use("/todos", require("./routes/todocrud"));

// Listen on port 5000
app.listen(5000, () => {
  console.log("server has started on port 5000");
});
const express = require("express");
const PORT = process.env.PORT || 3232;
const app = express();

app.set("view engine", "pug");
app.get("/", (req, res) => {
  //res.send("osman");
  res.status(200).render("index");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

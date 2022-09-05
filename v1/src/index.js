const express = require("express");
const helmet = require("helmet");
const path = require("path");
const config = require("./config");
const loaders = require("./loaders");
const {
  ProjectRouter,
  TaskRouter,
  SectionRouter,
  UserRouter,
} = require("./routes");
config();
loaders();
const PORT = process.env.APP_PORT || 3232;
const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "pug");

app.use("/projects", ProjectRouter);
app.use("/tasks", TaskRouter);
app.use("/sections", SectionRouter);
app.use("/users", UserRouter);

app.get("/", (req, res) => {
  //res.send("osman");
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

import express from "express";
// import { BodyParser } from "body-parser";

import bodyParser from "body-parser";

//import routes

import todoRoutes from "./routes/todos";

const app = express();

app.use(bodyParser.json());

app.use(todoRoutes);

const port: number = 3000;

app.listen(port, () => {
  console.log(`server is started at ${port}`);
});

import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const pug = require("pug");
const compiledFunction = pug.compileFile(
  "packages/node-express/pug/views/compile.pug"
);

const renderPage = pug.renderFile("packages/node-express/pug/views/render.pug");

app.get("/compile-pug", (req: any, res: { send: (arg0: any) => void }) => {
  const html = compiledFunction();
  res.send(html);
});

app.get("/render-pug", (req: any, res: { send: (arg0: any) => void }) => {
  const html = renderPage;
  res.send(html);
});

app.listen(PORT, () => {
  console.log("Server started by PORT ", process.env.PORT);
});

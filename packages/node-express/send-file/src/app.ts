import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/download", (req, res) => {
  const filePath = path.resolve(__dirname, "../public/test-document.docx");
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error("Ошибка при отправке файла:", err);
      res.status(500).send("Ошибка при отправке файла");
    }
  });
});

app.listen(PORT, () => {
  console.log("Server started by PORT ", process.env.PORT);
});

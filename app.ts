import express from "express";
import adminRouter from "./routes/admin";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/admin", adminRouter);

app.listen(8000, () => {
  console.log("**--------------------------------------------------------**");
  console.log("====                 Server is on...!!!                 ====");
  console.log("**--------------------------------------------------------**");
});

import express, { urlencoded } from "express";
import router from "./routes";
import headers from "./headers";

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(headers);
app.use("/", router);

app.listen(3000, () => console.log("Server runnin"));

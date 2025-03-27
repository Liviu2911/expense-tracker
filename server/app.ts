import express from "express";
import router from "./routes";
import headers from "./headers";

const app = express();

app.use(headers);
app.use("/", router);

app.listen(3000, () => console.log("Server runnin"));

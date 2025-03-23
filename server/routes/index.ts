import express from "express";
import getExpenses from "../functions/getExpenses";

const router = express.Router();

router.route("/expenses").get(getExpenses);

export default router;

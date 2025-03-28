import express from "express";
import getExpenses from "../functions/getExpenses";
import postExpense from "../functions/postExpense";

const router = express.Router();

router.route("/expenses").get(getExpenses).post(postExpense);

export default router;

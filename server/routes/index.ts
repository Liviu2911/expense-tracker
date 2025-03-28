import express, { Response } from "express";
import postExpense from "../functions/postExpense";
import deleteExpense from "../functions/deleteExpense";
import checkId from "../middleware/checkId";
import putExpense from "../functions/putExpenses";
import searchExpense from "../functions/searchExpense";
import getExpenses, { Req } from "../middleware/getExpenses";
import checkSearch from "../middleware/checkSearch";
import checkCategory from "../middleware/checkCategory";
import checkAmount from "../middleware/checkAmount";
import checkDate from "../middleware/checkDate";

const router = express.Router();

router
  .route("/expenses")
  .get(getExpenses, (req: Req, res: Response) => {
    res.send(req.data);
    return;
  })
  .post(postExpense);
router
  .route("/expenses/:id")
  .delete(checkId, deleteExpense)
  .put(checkId, putExpense);

router
  .route("/expenses/search=:search&category=:category&amount=:amount&date:date")
  .get(
    getExpenses,
    checkSearch,
    checkCategory,
    checkAmount,
    checkDate,
    searchExpense
  );

export default router;

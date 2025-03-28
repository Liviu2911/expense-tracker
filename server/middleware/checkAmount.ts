import { NextFunction, Response } from "express";
import { Req } from "./getExpenses";

export default function checkAmount(
  req: Req,
  res: Response,
  next: NextFunction
) {
  const { amount } = req.params;
  let { data } = req;

  if (!data) {
    res.status(404).send({
      error: "Data not found",
    });
    return;
  }

  const sign = amount[0];
  if (sign === "=") {
    next();
    return;
  }
  const n = parseInt(amount.slice(1)) || -1;

  data = data.filter((item: any) => {
    if (sign === "<" && item.amount <= n) return item;
    else if (sign === ">" && item.amount >= n) return item;
  });

  req.data = data;
  next();
}

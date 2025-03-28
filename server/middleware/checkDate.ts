import { NextFunction, Response } from "express";
import { Req } from "./getExpenses";

export default function checkDate(req: Req, res: Response, next: NextFunction) {
  const { date } = req.params;
  let { data } = req;

  if (!data) {
    res.status(404).send({
      error: "No data found",
    });
    return;
  }

  if (date === "t") {
    next();
    return;
  }

  data = data.filter((item: any) => {
    if (new Date(item.time) < new Date(date)) return item;
  });
  if (!data) {
    res.status(404).send({
      error: "No data found",
    });
    return;
  }

  req.data = data;
  next();
}

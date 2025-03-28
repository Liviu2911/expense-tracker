import { NextFunction, Response } from "express";
import { Req } from "./getExpenses";

export default function checkCategory(
  req: Req,
  res: Response,
  next: NextFunction
) {
  let { data } = req;
  const { category } = req.params;

  if (!data) {
    res.status(404).send({
      error: "Data not found",
    });
    return;
  }

  if (category === "all") {
    next();
    return;
  }

  data = data.filter((item: any) => item.type === category);
  if (!data.length) {
    res.status(404).send({
      error: "Data not found",
    });
    return;
  }
  req.data = data;
  next();
}

import { NextFunction, Response } from "express";
import { Req } from "./getExpenses";

export default function checkSearch(
  req: Req,
  res: Response,
  next: NextFunction
) {
  let { data } = req;
  const { search } = req.params;
  if (!data) {
    res.status(404).send({
      error: "Data not found",
    });
    return;
  }

  if (search === "<>") {
    next();
    return;
  }
  data = data.filter((item: any) => item.name.includes(search));
  req.data = data;
  next();
}

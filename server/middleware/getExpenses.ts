import type { Response, Request, NextFunction } from "express";
import client from "../db";
import { QueryResult } from "pg";

export interface Req extends Request {
  data?: QueryResult<any>[];
}

export default async function getExpenses(
  req: Req,
  res: Response,
  next: NextFunction
) {
  try {
    const data = await client.query("SELECT * FROM expenses");
    if (data.rowCount) {
      req.data = data.rows;
      next();
      return;
    }

    res.status(404).send({ error: "Data not found" });
    return;
  } catch (e) {
    console.log(e);
    res.status(500).send({ error: e });
    return;
  }
}

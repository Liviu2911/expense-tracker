import type { Response, Request } from "express";

export default function getExpenses(_: Request, res: Response) {
  res.send({ expenses: [] });
}

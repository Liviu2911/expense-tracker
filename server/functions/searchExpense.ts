import { Response } from "express";
import { Req } from "../middleware/getExpenses";

export default async function searchExpense(req: Req, res: Response) {
  const { search } = req.params;
  const { data } = req;
  if (search === "") {
    res.status(404).send({
      error: "No search words provided",
    });
    return;
  }
  console.log(data);

  res.send({
    data,
  });
  return;
}

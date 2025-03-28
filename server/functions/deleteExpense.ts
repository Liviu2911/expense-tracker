import { Request, Response } from "express";
import client from "../db";

export default async function deleteExpense(req: Request, res: Response) {
  const id = parseInt(req.params.id);

  if (!id || id < 0) {
    res.status(404).send({
      error: "Invalid id",
    });
    return;
  }

  try {
    await client.query("DELETE FROM expenses WHERE id=$1", [id]);
    res.status(200).send({
      message: "Expense deleted successfuly",
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      e,
    });
    return;
  }
}

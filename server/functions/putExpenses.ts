import { Request, Response } from "express";
import client from "../db";

export default async function putExpense(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const { name, date, amount, description, category } = req.body;

  try {
    await client.query(
      "UPDATE expenses SET name=$1, time=$2, amount=$3, description=$4, type=$5 WHERE id=$6",
      [name, date, amount, description, category, id]
    );
    res.status(200).send({
      message: "Expense updated",
    });
    return;
  } catch (e) {
    console.log(e);
    res.status(500).send({
      error: e,
    });
    return;
  }
}

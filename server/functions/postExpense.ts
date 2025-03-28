import { Request, Response } from "express";
import client from "../db";

export default async function postExpense(req: Request, res: Response) {
  const { body } = req;
  const { name, category, description, amount, date } = body;

  try {
    await client.query(
      `INSERT INTO expenses (name, type, amount, description, time) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [name, category, amount, description, date || new Date()]
    );
    res.status(200).send({ message: "Data posted successfuly" });
  } catch (e) {
    console.log(e);
    res.status(500).send({ error: e });
    throw Error("Error in posting data");
  }
}

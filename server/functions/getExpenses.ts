import type { Response, Request } from "express";
import client from "../db";

export default async function getExpenses(_: Request, res: Response) {
  try {
    const data = await client.query("SELECT * FROM expenses");
    if (data.rowCount) {
      res.status(200).send({ data: data.rows[0] });
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

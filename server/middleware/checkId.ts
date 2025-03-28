import { NextFunction, Request, Response } from "express";

export default function checkId(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id = parseInt(req.params.id);

  if (!id || id < 0) {
    res.status(404).send({
      error: "Invalid id",
    });
    return;
  }

  next();
}

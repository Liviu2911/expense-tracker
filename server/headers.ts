import { NextFunction, Request, Response } from "express";

export default function headers(_: Request, res: Response, next: NextFunction) {
  res.set("Content-Type", "application/json");
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, PUT, DELETE, POST");
  res.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
}

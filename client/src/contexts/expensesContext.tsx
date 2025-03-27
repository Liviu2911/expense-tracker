import { createContext } from "react";
import { Expense } from "../types";

export const ExpensesContext = createContext<Expense[]>([]);

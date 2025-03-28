import { Category } from "@/types";
import { createContext } from "react";

type AddExpenseType = {
  date: Date | undefined;
  amount: string;
  category: Category | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  setAmount: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<Category | undefined>>;
};

const AddExpenseContext = createContext<AddExpenseType>({
  date: new Date(),
  amount: "-1",
  category: "Entertainment",
  setDate: () => {},
  setAmount: () => {},
  setCategory: () => {},
});

export default AddExpenseContext;

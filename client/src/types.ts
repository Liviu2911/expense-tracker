export type Category = "Entertainment" | "Food" | "Health" | "Shopping";

export type Expense = {
  amount: number;
  name: string;
  type: Category;
  time: Date;
  description?: string;
  id: number;
};

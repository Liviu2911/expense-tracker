import { useContext, useEffect, useState } from "react";
import AmountInput from "../inputs/amount";
import CategoryInput from "../inputs/category";
import DateInput from "../inputs/date";
import DescriptionInput from "../inputs/descriprion";
import { ExpensesContext } from "@/contexts/expensesContext";
import { Category } from "@/types";
import AddExpenseContext from "@/contexts/formContext";

export default function AddExpense() {
  const data = useContext(ExpensesContext);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [amount, setAmount] = useState<number>(-1);
  const [category, setCategory] = useState<Category | undefined>();

  useEffect(() => {
    console.log(data);
  }, [data]);

  const postExpense = async (form: React.FormEvent<HTMLFormElement>) => {
    form.preventDefault();
    // const descriprion = new FormData(form.currentTarget).get("description");

    const res = await fetch("http://localhost:3000/expenses", {
      method: "POST",
    });

    const json = await res.json();
    console.log(json);
  };

  return (
    <div className="rounded-lg border border-gray-700 p-4 mt-12 w-[50%]">
      <h1 className="capitalize font-semibold text-lg">add new expense</h1>

      <AddExpenseContext.Provider
        value={{
          date,
          amount,
          category,
          setDate,
          setAmount,
          setCategory,
        }}
      >
        <form
          onSubmit={postExpense}
          className="flex flex-col gap-4 mt-4 w-full"
        >
          <div className="grid grid-cols-2 gap-4">
            <DateInput />
            <AmountInput />
          </div>
          <CategoryInput />
          <DescriptionInput />
          <button
            type="submit"
            className="bg-white text-gray-900 hover:bg-stone-200 hover:text-gray-700 cursor-pointer t3 rounded p-2"
          >
            Add Expense
          </button>
        </form>
      </AddExpenseContext.Provider>
    </div>
  );
}

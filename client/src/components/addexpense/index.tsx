import { useState } from "react";
import AmountInput from "../inputs/amount";
import CategoryInput from "../inputs/category";
import DateInput from "../inputs/date";
import DescriptionInput from "../inputs/descriprion";
import { Category } from "@/types";
import AddExpenseContext from "@/contexts/formContext";
import NameInput from "../inputs/nameInput";

export default function AddExpense() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [amount, setAmount] = useState<string>("");
  const [category, setCategory] = useState<Category | undefined>();

  const postExpense = async (form: React.FormEvent<HTMLFormElement>) => {
    form.preventDefault();
    const description = new FormData(form.currentTarget).get("description");
    const name = new FormData(form.currentTarget).get("name");

    try {
      const res = await fetch("http://localhost:3000/expenses", {
        method: "POST",
        body: JSON.stringify({
          name,
          category,
          date,
          amount: parseInt(amount),
          description,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await res.json();
      console.log(json);
    } catch (e) {
      console.log(e);
    }
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
            <NameInput />
            <AmountInput />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <CategoryInput />
            <DateInput />
          </div>
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

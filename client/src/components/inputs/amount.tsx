import { useContext } from "react";
import InputBox from "../inputbox";
import AddExpenseContext from "@/contexts/formContext";

export default function AmountInput() {
  const { amount, setAmount } = useContext(AddExpenseContext);
  return (
    <InputBox label="amount">
      <span className="text-gray-500 absolute top-[39px] left-2">$</span>
      <input
        className="border border-gray-700 rounded text-sm p-2 pl-8 focus:ring-0 focus:outline focus:outline-offset-3 focus:outline-gray-600"
        placeholder="0.00"
        value={amount < 0 ? "" : amount}
        onChange={(e) => {
          const word = e.currentTarget.value;
          if ("0123456789".includes(word[word.length - 1]))
            setAmount(parseInt(e.currentTarget.value));
          else if (word === "") setAmount(-1);
        }}
      />
    </InputBox>
  );
}

import { useEffect, useState } from "react";
import { ThemeContext } from "./contexts/themeContext";
import ChangeTheme from "./components/changeTheme";
import { Expense } from "./types";
import { ExpensesContext } from "./contexts/expensesContext";
import AddExpense from "./components/addexpense";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [data, setData] = useState<Expense[]>([]);

  useEffect(() => {
    const getExpenses = async () => {
      const res = await fetch("http://localhost:3000/expenses");
      const expenses = await res.json();
      setData(expenses);
    };

    const refetch = setInterval(() => {
      getExpenses();
    }, 1000);

    return () => {
      clearInterval(refetch);
    };
  }, []);

  const backgroundStyle = {
    backgroundColor:
      theme === "dark"
        ? "oklch(0.13 0.028 261.692)"
        : "oklch(0.97 0.001 106.424)",
    color:
      theme === "dark"
        ? "oklch(0.97 0.001 106.424)"
        : "oklch(0.13 0.028 261.692)",
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className="w-full h-[100vh] absolute left-0 top-0 p-12"
        style={backgroundStyle}
      >
        {data ? (
          <ExpensesContext.Provider value={data}>
            <ChangeTheme />
            <h1 className="font-semibold text-2xl">Expense Tracker</h1>
            <AddExpense />
          </ExpensesContext.Provider>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

import { createContext } from "react";

type Theme = {
  setTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>;
  theme: "dark" | "light";
};

export const ThemeContext = createContext<Theme>({
  setTheme: () => {},
  theme: "dark",
});

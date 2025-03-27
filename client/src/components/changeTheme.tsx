import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";
import { IoMdMoon } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";

export default function ChangeTheme() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      <button
        className={`float-right p-1.5 rounded-sm ${
          theme === "dark" ? " hover:bg-stone-700" : " hover:bg-stone-200"
        } t3 text-lg`}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "dark" ? <IoSunnyOutline /> : <IoMdMoon />}
      </button>
    </>
  );
}

import { useContext, useEffect, useRef, useState } from "react";
import InputBox from "../../inputbox";
import { Category } from "@/types";
import { IoIosArrowDown } from "react-icons/io";
import AddExpenseContext from "@/contexts/formContext";

const categories: Category[] = ["Entertainment", "Food", "Health", "Shopping"];

export default function CategoryInput() {
  const { category, setCategory } = useContext(AddExpenseContext);
  const [popup, setPopup] = useState<"exit" | "entry">("entry");
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      // @ts-expect-error Because I <3 ts
      if (ref.current && !ref.current.contains(e.target)) {
        setTimeout(() => {
          setPopup("exit");
          setTimeout(() => {
            setShow(false);
          }, 150);
        }, 50);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.addEventListener("mousedown", handler);
    };
  }, []);

  return (
    <InputBox label="category">
      <button
        type="button"
        onClick={() => {
          setShow(!show);
          setPopup("entry");
        }}
        className="border border-gray-700 rounded text-left px-4 py-2 hover:bg-gray-700 t3 cursor-pointer flex items-center justify-between text-sm"
      >
        {category || "Select category"}
        <span>
          <IoIosArrowDown />
        </span>
      </button>
      {show && (
        <div
          ref={ref}
          className={`absolute top-20 w-full flex justify-center popup-animation-${popup} z-10 text-sm`}
        >
          <div className="border border-gray-700 bg-gray-900 rounded-lg p-4 gap-2 absolute flex flex-col w-full">
            {categories.map((item) => (
              <button
                type="button"
                key={item}
                onClick={() => {
                  setCategory(item);
                  setTimeout(() => {
                    setPopup("exit");
                    setTimeout(() => {
                      setShow(false);
                    }, 150);
                  }, 50);
                }}
                className={`text-left py-1 px-4 rounded hover:bg-gray-700 t3 cursor-pointer ${
                  category === item && "bg-gray-700"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </InputBox>
  );
}

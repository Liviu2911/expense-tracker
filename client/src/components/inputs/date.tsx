import { useContext, useEffect, useRef, useState } from "react";
import { Calendar } from "../ui/calendar";
import InputBox from "../inputbox";
import { formatDate } from "date-fns";
import { IoCalendarOutline } from "react-icons/io5";
import AddExpenseContext from "@/contexts/formContext";

export default function DateInput() {
  const { date, setDate } = useContext(AddExpenseContext);
  const [show, setShow] = useState(false);
  const [calendarClass, setCalendarClass] = useState<"entry" | "exit">("entry");
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        ref.current &&
        // @ts-expect-error Because i <3 ts
        !ref.current.contains(e.target)
      ) {
        setTimeout(() => {
          setCalendarClass("exit");
          setTimeout(() => {
            setShow(false);
          }, 300);
        }, 50);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [show]);

  return (
    <InputBox label="date">
      <button
        type="button"
        onClick={() => {
          setShow(!show);
          setCalendarClass("entry");
        }}
        className="flex flex-row gap-2 items-center p-2 rounded border border-gray-700 text-sm hover:bg-gray-700 t3 cursor-pointer "
      >
        <IoCalendarOutline />
        {date && formatDate(date, "PPP")}
      </button>

      {show && (
        <div
          className={`absolute popup-animation-${calendarClass} top-20 z-20 w-full flex justify-center`}
          ref={ref}
        >
          <Calendar
            mode="single"
            selected={date}
            onSelect={(e) => {
              setDate(e || date);
            }}
            className="bg-gray-900 rounded-lg border border-gray-700 text-gray-400"
          />
        </div>
      )}
    </InputBox>
  );
}

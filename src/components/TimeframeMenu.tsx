import { Dispatch, SetStateAction } from "react";
import { TimeframeType } from "../types/data.types";

interface TimeframeMenuProps {
  timeframe: TimeframeType;
  setTimeframe: Dispatch<SetStateAction<TimeframeType>>;
}

export default function TimeframeMenu({ timeframe, setTimeframe }: TimeframeMenuProps) {
  const menu: TimeframeType[] = ["daily", "weekly", "monthly"];

  return (
    <ul className="flex justify-between md:flex-col gap-2 p-6">
      {menu.map((time) => (
        <li
          key={time}
          className={`cursor-pointer w-fit capitalize hover:text-white ${
            timeframe === time ? "font-white" : "text-[--desaturated-blue]"
          }`}
          onClick={() => setTimeframe(time)}
        >
          {time}
        </li>
      ))}
    </ul>
  );
}

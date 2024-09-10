import { useState } from "react";
import TimeframeMenu from "./components/TimeframeMenu";
import UserProfile from "./components/UserProfile";

export default function App() {
  const firstName = "Jeremy";
  const lastName = "Robson";

  const [timeframe, setTimeframe] = useState("weekly");

  return (
    <>
      <div className="flex items-center min-h-screen">
        <div className="w-full max-w-screen-lg mx-auto p-4">
          <div className="grid grid-cols-4 gap-6  ">
            <div className="row-span-2 flex flex-col bg-[var(--dark-blue)] rounded-2xl overflow-hidden">
              <UserProfile firstName={firstName} lastName={lastName} />
              <TimeframeMenu
                timeframe={timeframe}
                setTimeframe={setTimeframe}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

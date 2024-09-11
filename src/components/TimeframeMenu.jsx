export default function TimeframeMenu({ timeframe, setTimeframe }) {
  const menu = ["daily", "weekly", "monthly"];

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

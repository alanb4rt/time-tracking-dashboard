export default function TimeframeMenu({ timeframe, setTimeframe }) {
  const menu = ["daily", "weekly", "monthly"];

  return (
    <ul className="flex flex-col gap-2 p-6">
      {menu.map((time) => (
        <li
          key={time}
          className={`cursor-pointer w-fit capitalize ${
            timeframe === time ? "font-bold" : "opacity-50"
          }`}
          onClick={() => setTimeframe(time)}
        >
          {time}
        </li>
      ))}
    </ul>
  );
}

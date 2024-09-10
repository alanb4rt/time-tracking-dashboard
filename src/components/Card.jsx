import iconEllipsis from "../assets/images/icon-ellipsis.svg";

export default function Card({ item, timeframe, color }) {
  const { current, previous } = item.timeframes[timeframe];

  const timeframeText =
    timeframe === "daily"
      ? "Yesterday"
      : timeframe === "weekly"
      ? "Last Week"
      : "Last Month";

  return (
    <div
      className={`relative rounded-2xl pt-8 overflow-hidden`}
      style={{ backgroundColor: color }}
    >
      <img
        className="absolute -top-2 right-4"
        src={`./src/assets/images/icon-${item.title.replace(" ", "-")}.svg`}
        alt={`icon ${item.title}`}
      />
      <div className="relative h-full bg-[var(--dark-blue)] rounded-2xl p-6 cursor-pointer">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold">{item.title}</h2>
          <img src={iconEllipsis} alt="..." />
        </div>
        <div>
          <p className="text-4xl font-light">{current}hrs</p>
          <p className="text-sm opacity-75">
            {timeframeText} - {previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
}

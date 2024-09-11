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
      className="group relative rounded-2xl pt-8 overflow-hidden"
      style={{ backgroundColor: color }}
    >
      <img
        className="absolute -top-2 right-4"
        src={`./src/assets/images/icon-${item.title.replace(" ", "-")}.svg`}
        alt={`icon ${item.title}`}
      />
      <div className="relative h-full bg-[var(--dark-blue)] rounded-t-2xl p-6 cursor-pointer hover:brightness-[1.75]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-medium">{item.title}</h2>
          <img className="hover:brightness-200" src={iconEllipsis} alt="..." />
        </div>
        <div>
          <p className="text-5xl font-light mb-2">{current}hrs</p>
          <p className="text-sm opacity-50">
            {timeframeText} - {previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
}

import iconEllipsis from "../assets/images/icon-ellipsis.svg";
import { getImageURL } from "../utils/getImageURL";

export default function Card({ item, timeframe, color }) {
  const { current, previous } = item.timeframes[timeframe];

  const timeframeText =
    timeframe === "daily"
      ? "Yesterday"
      : timeframe === "weekly"
      ? "Last Week"
      : "Last Month";

  const iconURL = `icon-${item.title.toLowerCase().replace(" ", "-")}.svg`;

  return (
    <div
      className="group relative rounded-2xl pt-9 overflow-hidden"
      style={{ backgroundColor: color }}
    >
      <img
        className="absolute -top-2 right-4"
        src={getImageURL(iconURL)}
        alt={`icon ${item.title}`}
      />
      <div className="relative h-full bg-[var(--dark-blue)] rounded-t-2xl p-6 cursor-pointer hover:brightness-[1.75]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-medium">{item.title}</h2>
          <img className="hover:brightness-200" src={iconEllipsis} alt="..." />
        </div>
        <div className="flex justify-between items-center sm:items-stretch sm:flex-col gap-2">
          <p className="text-2xl sm:text-5xl font-light">{current}hrs</p>
          <p className="text-sm opacity-50">
            {timeframeText} - {previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
}

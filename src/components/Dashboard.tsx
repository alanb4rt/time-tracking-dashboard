import { DataType, TimeframeType } from "../types/data.types";
import Card from "./Card";

interface DashboardProps {
  data: DataType[];
  timeframe: TimeframeType;
}

const colorMap: { [key: string]: string } = {
  "Work": "var(--color-work)",
  "Play": "var(--color-play)",
  "Study": "var(--color-study)",
  "Exercise": "var(--color-exercise)",
  "Social": "var(--color-social)",
  "Self Care": "var(--color-self-care)",
}

export default function Dashboard({ data, timeframe }: DashboardProps) {
  return (
    <>
      {data.map((item) => (
        <Card
          key={item.title}
          item={item}
          timeframe={timeframe}
          color={colorMap[item.title]}
        />
      ))}
    </>
  );
}

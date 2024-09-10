import Card from "./Card";

export default function Dashboard({ data, timeframe }) {
  return (
    <>
      {data.map((item) => (
        <Card
          key={item.title}
          item={item}
          timeframe={timeframe}
          color={`var(--color-${item.title.toLowerCase().replace(" ", "-")})`}
        />
      ))}
    </>
  );
}

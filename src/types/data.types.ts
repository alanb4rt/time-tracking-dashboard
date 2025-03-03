export interface Timeframe {
  current: number;
  previous: number;
}

export interface DataType {
  title: string;
  timeframes: {
    daily: Timeframe;
    weekly: Timeframe;
    monthly: Timeframe;
  };
}

export type TimeframeType = "daily" | "weekly" | "monthly";

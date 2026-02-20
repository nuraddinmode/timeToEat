import type { Device } from "@shared/types";

export type RadioBtnProps = {
  heading: string;
  description?: string;
  isActive?: boolean;
  onClick?: () => void;
};

export type titleContentType = {
  id: number;
  title: string;
  device: Device;
};

type MealTime = "Завтрак" | "Обед" | "Полдник" | "Ужин";

type Dish = {
  id: number;
  img: string;
  time: MealTime;
  portion: string;
  name: string;
};

export type WeekDay =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export type WeekMenu = Record<WeekDay, Dish[]>;

type caloriesItem = {
  id: number;
  heading: string;
  description?: string;
};

export type caloriesType = caloriesItem[];

export type DayOfWeekProps = {
  id: number;
  key: WeekDay;
  day: string;
};

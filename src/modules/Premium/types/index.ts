import type { Device } from "@shared/types";

type RadioBtnProps = {
  heading: string;
  description?: string;
  isActive?: boolean;
  onClick?: () => void;
};

type titleContentType = {
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

type WeekDay =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

type WeekMenu = Record<WeekDay, Dish[]>;

type caloriesItem = {
  id: number;
  heading: string;
  description?: string;
  mealsCount?: number;
  daysInWeek?: number;
  isCustom?: boolean;
  isTrial?: boolean;
};

type caloriesType = caloriesItem[];

type DayOfWeekProps = {
  id: number;
  key: WeekDay;
  day: string;
};

export type {
  RadioBtnProps,
  titleContentType,
  WeekDay,
  WeekMenu,
  caloriesType,
  DayOfWeekProps,
  MealTime,
};

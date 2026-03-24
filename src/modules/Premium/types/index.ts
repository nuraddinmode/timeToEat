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
};

type caloriesType = caloriesItem[];

type DayOfWeekProps = {
  id: number;
  key: WeekDay;
  day: string;
};

type MealPlanState = {
  selectedCalories: number;
  selectedDuration: number;
  selectedDay: WeekDay;
  selectedDayOfNutrition: number;

  setSelectedCalories: (value: number) => void;
  setSelectedDuration: (value: number) => void;
  setSelectedDay: (value: WeekDay) => void;
  setSelectedDayOfNutrition: (value: number) => void;
};

export type {
  RadioBtnProps,
  titleContentType,
  WeekDay,
  WeekMenu,
  caloriesType,
  DayOfWeekProps,
  MealPlanState,
};

import { create } from "zustand";
import type { WeekDay } from "../types";

type State = {
  selectedCalories: number;
  selectedDuration: number;
  selectedDay: WeekDay;
  selectedDayOfNutrition: number;

  mealsCount: number;
  pricePerDay: number;
  totalPrice: number;
};

type Actions = {
  setSelectedCalories: (value: number) => void;
  setSelectedDuration: (value: number) => void;
  setSelectedDay: (value: WeekDay) => void;
  setSelectedDayOfNutrition: (value: number) => void;

  setMealsCount: (value: number) => void;
  setPricePerDay: (value: number) => void;
  setTotalPrice: (value: number) => void;
};

const InitialState: State = {
  selectedCalories: 1,
  selectedDuration: 3,
  selectedDay: "wednesday",
  selectedDayOfNutrition: 5,
  mealsCount: 0,
  pricePerDay: 0,
  totalPrice: 0,
};

export const useMealPlanStore = create<State & Actions>((set) => ({
  ...InitialState,

  setSelectedDayOfNutrition: (value) => set({ selectedDayOfNutrition: value }),

  setSelectedCalories: (value) => set({ selectedCalories: value }),

  setSelectedDuration: (value) => set({ selectedDuration: value }),

  setSelectedDay: (value) => set({ selectedDay: value }),

  setMealsCount: (value) => set({ mealsCount: value }),
  setPricePerDay: (value) => set({ pricePerDay: value }),
  setTotalPrice: (value) => set({ totalPrice: value }),
}));

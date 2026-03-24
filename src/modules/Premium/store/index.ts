import { create } from "zustand";
import type { MealPlanState } from "../types";

export const useMealPlanStore = create<MealPlanState>((set) => ({
  selectedCalories: 1,
  selectedDuration: 3,
  selectedDay: "wednesday",
  selectedDayOfNutrition: 5,

  setSelectedDayOfNutrition: (value) => set({ selectedDayOfNutrition: value }),

  setSelectedCalories: (value) => set({ selectedCalories: value }),

  setSelectedDuration: (value) => set({ selectedDuration: value }),

  setSelectedDay: (value) => set({ selectedDay: value }),
}));

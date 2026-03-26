import type { ItemProps } from "../types";

const activities: ItemProps[] = [
  { id: 1, option: "Активность", value: "" },
  { id: 2, option: "Минимальная", value: "1.2" },
  { id: 3, option: "Лёгкая", value: "1.375" },
  { id: 4, option: "Средняя", value: "1.55" },
  { id: 5, option: "Высокая", value: "1.725" },
];

const goals: ItemProps[] = [
  { id: 1, option: "Выберите цель", value: "" },
  { id: 2, option: "Похудеть", value: "lose" },
  { id: 3, option: "Поддерживать вес", value: "maintain" },
  { id: 4, option: "Набрать массу", value: "gain" },
];
export { activities, goals };

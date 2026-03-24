import type { ItemProps } from "../types";

const activities: ItemProps[] = [
  { option: "Активность", value: "" },
  { option: "Минимальная", value: "1.2" },
  { option: "Лёгкая", value: "1.375" },
  { option: "Средняя", value: "1.55" },
  { option: "Высокая", value: "1.725" },
];

const goals: ItemProps[] = [
  { option: "Выберите цель", value: "" },
  { option: "Похудеть", value: "lose" },
  { option: "Поддерживать вес", value: "maintain" },
  { option: "Набрать массу", value: "gain" },
];
export { activities, goals };

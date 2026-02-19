type Item = {
  option: string;
  value: string;
};

const activities: Item[] = [
  { option: "Активность", value: "" },
  { option: "Минимальная", value: "1.2" },
  { option: "Лёгкая", value: "1.375" },
  { option: "Средняя", value: "1.55" },
  { option: "Высокая", value: "1.725" },
];

const goals: Item[] = [
  { option: "Выберите цель", value: "" },
  { option: "Похудеть", value: "lose" },
  { option: "Поддерживать вес", value: "maintain" },
  { option: "Набрать массу", value: "gain" },
];
export { activities, goals };

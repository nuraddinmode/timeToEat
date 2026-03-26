import type {
  titleContentType,
  WeekMenu,
  caloriesType,
  DayOfWeekProps,
} from "../types";

import {
  dish1,
  dish2,
  dish3,
  dish4,
  dish5,
  dish6,
  dish7,
  dish8,
  dish9,
  dish10,
} from "@assets/index";

const titleContent: titleContentType[] = [
  { id: 0, title: "Программа питания", device: "mobile" },
  { id: 1, title: "Программа ПремиумБоул", device: "laptop" },
];

const calories: caloriesType = [
  { id: 0, heading: "900 ккал", description: "3 блюда", mealsCount: 3 },
  { id: 1, heading: "1250 ккал", description: "4 блюда", mealsCount: 4 },
  { id: 2, heading: "1600 ккал", description: "5 блюд", mealsCount: 5 },
  { id: 3, heading: "2050 ккал", description: "6 блюд", mealsCount: 6 },
  { id: 4, heading: "Индивидуально подобрать" },
];

const continuity: caloriesType = [
  { id: 0, heading: "Пробные 2 дня", description: "за 2 900 ₽" },
  {
    id: 1,
    heading: "1 неделя",
    description: "1 700 ₽ в день",
    daysInWeek: 7,
  },
  {
    id: 2,
    heading: "2 недели",
    description: "1 600 ₽ в день",
    daysInWeek: 14,
  },
  {
    id: 3,
    heading: "3 недели",
    description: "1 520 ₽ в день",
    daysInWeek: 21,
  },
  {
    id: 4,
    heading: "4 недели",
    description: "1 450 ₽ в день",
    daysInWeek: 28,
  },
];

const daysOfWeek: DayOfWeekProps[] = [
  { id: 0, key: "monday", day: "понедельник" },
  { id: 1, key: "tuesday", day: "вторник" },
  { id: 2, key: "wednesday", day: "среда" },
  { id: 3, key: "thursday", day: "четверг" },
  { id: 4, key: "friday", day: "пятница" },
  { id: 5, key: "saturday", day: "суббота" },
  { id: 6, key: "sunday", day: "воскресенье" },
];

const dishes: WeekMenu = {
  monday: [
    {
      id: 0,
      img: dish1,
      time: "Завтрак",
      portion: "230/250 гр",
      name: "Утренний боул с перепелиным яйцом, киноа и лососем",
    },
    {
      id: 1,
      img: dish2,
      time: "Обед",
      portion: "320/30 гр",
      name: "Боул с куриными фрикадельками в кунжуте, брокколи и миндальным соусом",
    },
    {
      id: 2,
      img: dish3,
      time: "Полдник",
      portion: "50/30 гр",
      name: "Кукурузные блинчики с кокосовым припеком и фруктовым тар-таром",
    },
    {
      id: 3,
      img: dish4,
      time: "Ужин",
      portion: "100/100 гр",
      name: "Морепродукты в соусе Гарсия со стручковой фасолью",
    },
  ],

  tuesday: [
    {
      id: 4,
      img: dish5,
      time: "Завтрак",
      portion: "220/200 гр",
      name: "Овсяная каша на миндальном молоке с голубикой и семенами чиа",
    },
    {
      id: 5,
      img: dish6,
      time: "Обед",
      portion: "300/40 гр",
      name: "Индейка су-вид с бататом и соусом из печёного перца",
    },
    {
      id: 6,
      img: dish7,
      time: "Полдник",
      portion: "180 гр",
      name: "Творожный мусс с манго и кокосовой стружкой",
    },
    {
      id: 7,
      img: dish8,
      time: "Ужин",
      portion: "250/80 гр",
      name: "Филе судака с киноа и кремом из цветной капусты",
    },
  ],

  wednesday: [
    {
      id: 8,
      img: dish9,
      time: "Завтрак",
      portion: "210/180 гр",
      name: "Сырники из рикотты с ягодным соусом без сахара",
    },
    {
      id: 9,
      img: dish3,
      time: "Обед",
      portion: "330/50 гр",
      name: "Говядина в соусе терияки с бурым рисом и овощами",
    },
    {
      id: 10,
      img: dish6,
      time: "Полдник",
      portion: "160 гр",
      name: "Протеиновый брауни с ореховой пастой",
    },
    {
      id: 11,
      img: dish4,
      time: "Ужин",
      portion: "240/90 гр",
      name: "Куриное филе гриль с салатом из рукколы и томатов черри",
    },
  ],

  thursday: [
    {
      id: 12,
      img: dish2,
      time: "Завтрак",
      portion: "200/200 гр",
      name: "Чиа-пудинг на кокосовом молоке с маракуйей",
    },
    {
      id: 13,
      img: dish6,
      time: "Полдник",
      portion: "170 гр",
      name: "Фруктовый салат с йогуртовой заправкой",
    },
    {
      id: 15,
      img: dish1,
      time: "Ужин",
      portion: "260/100 гр",
      name: "Телятина с пюре из тыквы и спаржей",
    },
    {
      id: 7,
      img: dish8,
      time: "Ужин",
      portion: "250/80 гр",
      name: "Филе судака с киноа и кремом из цветной капусты",
    },
  ],

  friday: [
    {
      id: 16,
      img: dish4,
      time: "Завтрак",
      portion: "230/210 гр",
      name: "Омлет с креветками и авокадо",
    },
    {
      id: 17,
      img: dish3,
      time: "Обед",
      portion: "340/50 гр",
      name: "Паста из твёрдых сортов пшеницы с курицей и соусом песто",
    },
    {
      id: 18,
      img: dish9,
      time: "Полдник",
      portion: "150 гр",
      name: "Орехово-финиковые батончики без сахара",
    },
    {
      id: 19,
      img: dish8,
      time: "Ужин",
      portion: "250/80 гр",
      name: "Филе трески с овощами на пару",
    },
  ],

  saturday: [
    {
      id: 20,
      img: dish1,
      time: "Завтрак",
      portion: "240/220 гр",
      name: "Греческий йогурт с гранолой и мёдом",
    },
    {
      id: 21,
      img: dish7,
      time: "Обед",
      portion: "350/60 гр",
      name: "Стейк из говядины с печёным картофелем и соусом демиглас",
    },
    {
      id: 22,
      img: dish10,
      time: "Полдник",
      portion: "160 гр",
      name: "Шоколадный протеиновый коктейль",
    },
    {
      id: 23,
      img: dish2,
      time: "Ужин",
      portion: "220/90 гр",
      name: "Куриные рулеты со шпинатом и сыром фета",
    },
  ],

  sunday: [
    {
      id: 24,
      img: dish7,
      time: "Завтрак",
      portion: "230/200 гр",
      name: "Блинчики из миндальной муки с ягодным топпингом",
    },
    {
      id: 25,
      img: dish1,
      time: "Обед",
      portion: "330/40 гр",
      name: "Запечённая индейка с киноа и овощами гриль",
    },
    {
      id: 26,
      img: dish6,
      time: "Полдник",
      portion: "170 гр",
      name: "Творожная запеканка с ванилью и курагой",
    },
    {
      id: 27,
      img: dish4,
      time: "Ужин",
      portion: "240/80 гр",
      name: "Сёмга на пару с брокколи и лимонным соусом",
    },
  ],
};

const days = [5, 6, 7];

export { titleContent, calories, continuity, daysOfWeek, dishes, days };

import type { AdvertisementProps } from "../types";
import vectorDesktop from "@assets/icons/vectorLaptop.svg?component";
import vectorMobile from "@assets/icons/vectorMobile.svg?component";

const content: AdvertisementProps[] = [
  {
    id: 0,
    text: "Скидка 10% при заказе от 2х недель",
    img: vectorMobile,
    device: "mobile",
  },
  {
    id: 1,
    text: "Скидка 20% на первый заказ",
    img: vectorDesktop,
    device: "laptop",
  },
];

export { content };

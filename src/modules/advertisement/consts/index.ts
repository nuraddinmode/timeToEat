import vectorDesktop from "@assets/icons/vectorLaptop.svg?component";
import vectorMobile from "@assets/icons/vectorMobile.svg?component";
import type { Device } from "../types";
// import type { ReactSVGElement } from "react";

type AdvertisementItem = {
  id: number;
  text: string;
  img: any;
  device: Device;
};

const content: AdvertisementItem[] = [
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
    device: "desktop",
  },
];

export { content };

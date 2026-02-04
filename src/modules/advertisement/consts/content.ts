import { vectorDesktop, vectorMobile } from "../assets";

type Device = "mobile" | "desktop";

interface AdvertisementItem {
  id: number;
  text: string;
  img: string;
  device: Device;
}

export const content: AdvertisementItem[] = [
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

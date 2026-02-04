type Device = "mobile" | "desktop";

interface ContentItem {
  id: number;
  device: Device;
  text: string;
}

const content: ContentItem[] = [
  {
    id: 0,
    device: "mobile",
    text: "Прогрессивное питание на каждый день",
  },
  {
    id: 1,
    device: "desktop",
    text: "Доставка прогрессивного питания для гурманов",
  },
];

export default content;

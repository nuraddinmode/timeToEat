import type { Device } from "@shared/types";

export type AdvertisementProps = {
  id: number;
  text: string;
  img: React.FC<React.SVGProps<React.ReactSVGElement>>;
  device: Device;
};

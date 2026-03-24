import type { Device } from "@shared/types";

type AdvertisementProps = {
  id: number;
  text: string;
  img: React.FC<React.SVGProps<React.ReactSVGElement>>;
  device: Device;
};

export type { AdvertisementProps };

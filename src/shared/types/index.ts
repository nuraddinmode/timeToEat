

type Device = "mobile" | "laptop";

type SmallRadioProps = {
  isActive: boolean;
  text: string;
  onClick?: () => void;
};

export type { Device, SmallRadioProps };

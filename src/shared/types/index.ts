import type { ReactNode } from "react";

type Device = "mobile" | "laptop";

type ButtonProps = {
  children: ReactNode;
  width?: string;
};

type SmallRadioProps = {
  isActive: boolean;
  text: string;
  onClick?: () => void;
};

export type { Device, ButtonProps, SmallRadioProps };

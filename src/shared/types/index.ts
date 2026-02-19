import type { ReactNode } from "react";

export type Device = "mobile" | "laptop";

export type ButtonProps = {
  children: ReactNode;
  width?: string;
};

export type SmallRadioProps = {
  isActive: boolean;
  text: string;
  onClick?: () => void;
};

type DeviceType = "Laptop" | "Tablet" | "Mobile";

type SizeType = "Large" | "Medium" | "Small";

const DeviceSize: Record<SizeType, string> = {
  Large: "1440px",
  Medium: "768px",
  Small: "375px",
};

const Device: Record<DeviceType, string> = {
  Laptop: `(min-width: ${DeviceSize.Large})`,
  Tablet: `(min-width: ${DeviceSize.Medium})`,
  Mobile: `(min-width: ${DeviceSize.Small})`,
};

export { Device };

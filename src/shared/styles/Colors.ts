// export const Colors = {
//   primary: "#4D8F76",
//   secondary: "#493E3E",
//   warmBeige: "#A98C64",
//   mutedGray: "#756D6D",
//   lightSand: "#DFCCB7",
//   paleOlive: "#e2ddc0",
//   softTeal: "#6D9988",
//   sageGreen: "#A2BE95",
//   lightOlive: "#E2DDC0",
//   cream: "#F4EDDE",
//   background: "#faf6f2",
//   dustyRose: "#B89683",
//   black: "#000",
//   white: "#FFF",
// } as const;

export const Colors = {
  primary: "#4D8F76",
  secondary: "#493E3E",
  background: {
    primary: "#faf6f2",
    secondary: "#A2BE95",
    tertiary: "#E2DDC0",

    subscription: "#B89683",
    buttons: "#DFCCB7",
    delivery: "#F4EDDE",
  },
  text: {
    comment: "#756D6D",
  },
  extra: {
    primary: "#A98C64",
  },
  ui: {
    large: "#e2ddc0",
    small: "#6D9988",
  },

  black: "#000",
  white: "#FFF",
} as const;

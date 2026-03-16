type ContentProps = {
  id: number;
  text: string;
  color: string;
};

type RootProps = {
  $color: string;
};

type ColoredBtnProps = {
  children: React.ReactNode;
  color: string;
};

export type { ContentProps, RootProps, ColoredBtnProps };

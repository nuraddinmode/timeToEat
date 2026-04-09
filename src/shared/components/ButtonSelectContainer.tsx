import styled from "styled-components";
import { Colors } from "@shared/styles/Colors";
import type { ReactNode } from "react";

const Root = styled.div<{ $border: boolean }>`
  position: relative;
  display: flex;
  border-radius: 60px;
  background-color: ${Colors.background.primary};
  padding: 4px 4px;
  width: fit-content;

  border: ${({ $border }) =>
    $border ? `1px solid ${Colors.background.buttons}` : "none"};
`;

type Props = {
  children: ReactNode;
  border: boolean;
};

const ButtonSelectContainer = ({ children, border }: Props) => {
  return <Root $border={border}>{children}</Root>;
};

export { ButtonSelectContainer };

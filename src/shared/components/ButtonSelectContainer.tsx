import styled from "styled-components";
import { Colors } from "@shared/styles/Colors";

const Root = styled.div<{ $border: boolean }>`
  position: relative;
  display: flex;
  border-radius: 60px;
  background-color: ${Colors.background};
  padding: 4px 4px;
  width: fit-content;

  border: ${({ $border }) =>
    $border ? `1px solid ${Colors.lightSand}` : "none"};
`;

const ButtonSelectContainer = ({ children, border }: any) => {
  return <Root $border={border}>{children}</Root>;
};

export { ButtonSelectContainer };

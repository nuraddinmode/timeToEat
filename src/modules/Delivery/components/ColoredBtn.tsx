import { Colors } from "@shared/styles/Colors";
import { Device } from "@shared/styles/media";
import styled from "styled-components";
import type { RootProps, ColoredBtnProps } from "../types";

const Root = styled.div<RootProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 158px;
  height: 30px;
  border-radius: 30px;
  border: 2px solid ${(props) => props.$color};
  margin: 5px;

  color: ${Colors.secondary};
  font-family: "TT Norms Pro";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media ${Device.Laptop} {
    width: 307px;
    height: 60px;
    font-size: 20px;
  }
`;

const ColoredBtn = ({ children, color }: ColoredBtnProps) => {
  return <Root $color={color}>{children}</Root>;
};
export { ColoredBtn };

import { Font } from "@shared/fonts";
import type { RadioBtnProps } from "../types";
import { Colors } from "@shared/styles/Colors";
import styled from "styled-components";

const Root = styled.div<{ $isActive?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 96px;
  border-radius: 30px;
  border: 1px solid ${Colors.background.buttons};
  gap: 5px;
  background-color: ${({ $isActive }) =>
    $isActive ? Colors.background.buttons : "transparent"};
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background-color: ${Colors.background.buttons};
  }
`;

const Heading = styled.h3`
  color: ${Colors.secondary};
  ${Font.Text.H3}
  text-align: center;
`;

const Description = styled.h5`
  ${Font.Text.H5}
  color: ${Colors.secondary};
  text-align: center;
`;

const RadioBtn = ({
  heading,
  description,
  isActive,
  onClick,
}: RadioBtnProps) => {
  return (
    <Root $isActive={isActive} onClick={onClick}>
      <Heading>{heading}</Heading>
      {description && <Description>{description}</Description>}
    </Root>
  );
};

export { RadioBtn };

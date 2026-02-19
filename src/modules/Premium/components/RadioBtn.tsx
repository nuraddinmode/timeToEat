import type { RadioBtnProps } from "../types";
import { Colors } from "@shared/styles/Colors";
import { Device } from "@shared/styles/media";
import styled from "styled-components";

const Root = styled.div<{ $isActive?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 96px;
  border-radius: 30px;
  border: 1px solid ${Colors.backgroundKcal};
  gap: 5px;
  background-color: ${({ $isActive }) =>
    $isActive ? Colors.backgroundKcal : "transparent"};
  cursor: pointer;
  transition: 0.2s ease;
`;

const Heading = styled.h3`
  color: ${Colors.secondary};
  font-family: "TT Norms Pro";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;

  @media ${Device.Laptop} {
    font-size: 24px;
  }
`;

const Description = styled.p`
  color: ${Colors.secondary};
  font-family: "TT Norms Pro";
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media ${Device.Laptop} {
    font-size: 16px;
  }
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
      {description && <Description>{description}</Description>}{" "}
    </Root>
  );
};

export { RadioBtn };

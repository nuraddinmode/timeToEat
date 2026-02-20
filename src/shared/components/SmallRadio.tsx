import { Colors } from "@shared/styles/Colors";
import styled from "styled-components";
import type { SmallRadioProps } from "@shared/types";
import { Device } from "@shared/styles/media";

const Root = styled.div<{ $isActive?: boolean }>`
  padding: 8px 23px;
  border-radius: 40px;
  border: 1px solid ${Colors.backgroundKcal};
  cursor: pointer;
  white-space: nowrap;

  color: ${Colors.secondary};
  font-family: "TT Norms Pro";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background-color: ${({ $isActive }) =>
    $isActive ? Colors.backgroundKcal : "transparent"};

  @media ${Device.Laptop} {
    font-size: 20px;
  }
`;

const SmallRadio = ({ isActive, text, onClick }: SmallRadioProps) => {
  return (
    <Root $isActive={isActive} onClick={onClick}>
      {text}
    </Root>
  );
};

export { SmallRadio };

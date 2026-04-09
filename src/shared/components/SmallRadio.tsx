import { Colors } from "@shared/styles/Colors";
import styled from "styled-components";
import { Device } from "@shared/styles/media";

const Root = styled.div<{ $isActive?: boolean }>`
  padding: 8px 23px;
  border-radius: 40px;
  border: 1px solid ${Colors.background.buttons};
  cursor: pointer;
  white-space: nowrap;

  color: ${Colors.secondary};
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background-color: ${({ $isActive }) =>
    $isActive ? Colors.background.buttons : "transparent"};
  user-select: none;

  &:hover {
    background-color: ${Colors.background.buttons};
  }

  @media ${Device.Laptop} {
    font-size: 20px;
  }
`;

type Props = {
  isActive: boolean;
  text: string;
  onClick?: () => void;
};

const SmallRadio = ({ isActive, text, onClick }: Props) => {
  return (
    <Root $isActive={isActive} onClick={onClick}>
      {text}
    </Root>
  );
};

export { SmallRadio };

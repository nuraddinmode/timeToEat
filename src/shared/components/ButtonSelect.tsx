import styled from "styled-components";
import { Colors } from "@shared/styles/Colors";

const Root = styled.div<{ $isActive?: boolean }>`
  border-radius: 100%;
  padding: 9px 11px;

  &:hover {
    background-color: ${Colors.backgroundKcal};
  }

  background-color: ${({ $isActive }) =>
    $isActive ? Colors.backgroundKcal : "transparent"};
`;

const ButtonSelect = ({ children, isActive, onClick }: any) => {
  return (
    <Root $isActive={isActive} onClick={onClick}>
      {children}
    </Root>
  );
};

export { ButtonSelect };

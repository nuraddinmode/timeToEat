import { Colors } from "@shared/styles/Colors";
import styled from "styled-components";
import { Device } from "@shared/styles/media";
import type { ButtonProps } from "@shared/types";

const Root = styled.div<{ width?: string }>`
  padding: 9px 26px;
  background-color: ${Colors.primary};
  border: 1px solid transparent;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width || "fit-content"};
  color: ${Colors.white};

  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  flex-shrink: 0;

  cursor: pointer;

  &:hover {
    background-color: transparent;
    color: ${Colors.primary};
    border: 1px solid ${Colors.primary};
  }

  @media ${Device.Tablet} {
    font-size: 16px;
  }
`;

const Button = ({ children, width, onClick }: ButtonProps) => {
  return (
    <Root onClick={onClick} width={width}>
      {children}
    </Root>
  );
};

export { Button };

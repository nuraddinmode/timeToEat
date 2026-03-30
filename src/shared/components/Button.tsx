import { Colors } from "@shared/styles/Colors";
import styled from "styled-components";
import { Device } from "@shared/styles/media";
import type { ReactNode } from "react";

const Root = styled.button<{ width?: string; type?: string }>`
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

type ButtonProps = {
  children: ReactNode;
  width?: string;
  onClick?: () => void;
  type?: string;
};

const Button = ({ type, children, width, onClick }: ButtonProps) => {
  return (
    <Root type={type} onClick={onClick} width={width}>
      {children}
    </Root>
  );
};

export { Button };

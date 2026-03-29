import styled from "styled-components";
import { Colors } from "@shared/styles/Colors";
import { Device } from "@shared/styles/media";

const Root = styled.input<{ $marginBottom?: string }>`
  border-radius: 40px;
  background: ${Colors.background};
  width: 308px;
  padding: 15px 13px;

  margin-bottom: ${({ $marginBottom }) =>
    $marginBottom ? $marginBottom : "0px"};

  @media ${Device.Laptop} {
    width: 308px;
  }
`;

const DataInput = ({ children, type, placeholder, marginBottom }: any) => {
  return (
    <Root $marginBottom={marginBottom} type={type} placeholder={placeholder}>
      {children}
    </Root>
  );
};

export { DataInput };

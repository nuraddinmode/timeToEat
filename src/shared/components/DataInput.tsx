import styled from "styled-components";
import { Colors } from "@shared/styles/Colors";
import { Device } from "@shared/styles/media";

const Root = styled.input<{ $marginBottom?: string }>`
  border-radius: 40px;
  background: ${Colors.background.primary};
  width: 308px;
  padding: 15px 13px;

  margin-bottom: ${({ $marginBottom }) =>
    $marginBottom ? $marginBottom : "0px"};

  @media ${Device.Laptop} {
    width: 308px;
  }
`;

type Props = {
  type: string;
  placeholder: string;
  marginBottom?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const DataInput = ({
  value,
  onChange,
  type,
  placeholder,
  marginBottom,
}: Props) => {
  return (
    <Root
      value={value}
      onChange={onChange}
      $marginBottom={marginBottom}
      type={type}
      placeholder={placeholder}
    />
  );
};

export { DataInput };

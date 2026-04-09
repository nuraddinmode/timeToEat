import { Colors } from "@shared/styles/Colors";
import { items } from "../consts";
import styled from "styled-components";
import { Font } from "@shared/fonts";

const Root = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const Item = styled.li`
  color: ${Colors.secondary};
  ${Font.Text.H5}
`;

const Navigation = () => {
  return (
    <Root>
      {items.map(({ id, label, target }) => (
        <Item key={id}>
          <a href={`#${target}`}>{label}</a>
        </Item>
      ))}
    </Root>
  );
};

export { Navigation };

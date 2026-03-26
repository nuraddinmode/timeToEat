import { Colors } from "@shared/styles/Colors";
import { items } from "../consts";
import styled from "styled-components";

const Root = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const Item = styled.li`
  color: ${Colors.secondary};
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Navigation = () => {
  return (
    <Root>
      {items.map(({ id, label }) => (
        <Item key={id}>
          <a href="">{label}</a>
        </Item>
      ))}
    </Root>
  );
};

export { Navigation };

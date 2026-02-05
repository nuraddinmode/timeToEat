import items from "../consts/items";
import styled from "styled-components";

export const Root = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const Item = styled.li`
  color: #493e3e;
  font-feature-settings: off;
  font-family: "TT Norms Pro";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Navigation = () => {
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

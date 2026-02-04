import items from "../../consts/items";
import { Item, List } from "./Navigation.styles";

const Navigation = () => {
  return (
    <List>
      {items.map(({ id, label }) => (
        <Item key={id}>
          <a href="">{label}</a>
        </Item>
      ))}
    </List>
  );
};

export default Navigation;

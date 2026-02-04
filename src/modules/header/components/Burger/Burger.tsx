import items from "../../consts/items";

const Burger = () => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.label}</li>
      ))}
    </ul>
  );
};

export default Burger;

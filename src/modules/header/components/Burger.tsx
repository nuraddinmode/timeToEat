import { items } from "../consts";

const Burger = () => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.label}</li>
      ))}
    </ul>
  );
};

export { Burger };

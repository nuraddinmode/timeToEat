import { Colors } from "@shared/styles/Colors";
import { items } from "../consts";
import styled from "styled-components";

const Root = styled.ul`
  position: absolute;
  top: 50px;
  right: 0;
  z-index: 3;
  width: 220px;
  padding: 16px 0;

  background: ${Colors.background.tertiary};
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  list-style: none;
  margin: 0;

  display: flex;
  flex-direction: column;
  gap: 12px;

  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  li {
    padding: 8px 16px;
    cursor: pointer;
    transition: background 0.2s ease;

    &:hover {
      background: ${Colors.extra.primary};
    }
  }
`;

const Burger = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Root>
      {items.map((item) => (
        <li key={item.id} onClick={() => scrollToSection(item.target)}>
          {item.label}
        </li>
      ))}
    </Root>
  );
};

export { Burger };

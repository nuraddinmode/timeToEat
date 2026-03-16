import { useState } from "react";
import { Burger } from "./Burger";
import BurgerIcon from "@assets/icons/burgerIcon.svg?component";
import styled from "styled-components";

const Root = styled.div`
  position: relative;
`;

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Root>
      <button onClick={handleClick}>
        <BurgerIcon />
      </button>
      {isOpen && <Burger />}
    </Root>
  );
};

export { MobileNavigation };

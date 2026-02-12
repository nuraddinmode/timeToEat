import { useState } from "react";
import { Burger } from "./Burger";
import BurgerIcon from "@assets/icons/burgerIcon.svg?component";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button onClick={handleClick}>
        <BurgerIcon />
      </button>
      {isOpen && <Burger />}
    </>
  );
};

export { MobileNavigation };

import { useState } from "react";
import Burger from "../Burger/Burger";
import { burgerIcon } from "../../assets";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button onClick={handleClick}>
        <img src={burgerIcon} alt="" />
      </button>
      {isOpen && <Burger />}
    </>
  );
};

export default MobileNavigation;

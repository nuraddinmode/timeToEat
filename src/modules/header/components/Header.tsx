import { useIsMobile } from "../../../shared/hooks/useIsMobile";
import MobileNavigation from "./MobileNavigation/MobileNavigation";
import Navigation from "./Navigation/Navigation";
import { logoDesktop, logoMobile } from "../assets";
import Contacts from "./Contacts/Contacts";
import { Wrapper } from "./Header.styles";

const Header = () => {
  const isMobile = useIsMobile();

  return (
    <Wrapper>
      <img src={isMobile ? logoMobile : logoDesktop} alt="" />

      <nav>{isMobile ? <MobileNavigation /> : <Navigation />}</nav>
      {!isMobile && <Contacts />}
    </Wrapper>
  );
};

export default Header;

import { useIsMobile } from "@shared/hooks/useIsMobile";
import { MobileNavigation } from "./components/MobileNavigation";
import { Navigation } from "./components/Navigation";
import LogoDesktop from "@assets/icons/logoDesktop.svg?component";
import LogoMobile from "@assets/icons/logoMobile.svg?component";
import { Contacts } from "./components/Contacts";
import styled from "styled-components";
import { Device } from "@shared/styles/media";

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 45px;

  @media ${Device.Laptop} {
    margin-bottom: 0px;
  }
`;

const Header = () => {
  const isMobile = useIsMobile();
  console.log(isMobile);

  return (
    <Root>
      {isMobile ? <LogoMobile /> : <LogoDesktop />}

      <nav>{isMobile ? <MobileNavigation /> : <Navigation />}</nav>
      {!isMobile && <Contacts />}
    </Root>
  );
};

export { Header };

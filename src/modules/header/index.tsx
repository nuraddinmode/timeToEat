import { useIsMobile } from "@shared/hooks/useIsMobile";
import { MobileNavigation } from "./components/MobileNavigation";
import { Navigation } from "./components/Navigation";
import LogoDesktop from "@assets/img/logoDesktop.svg";
import LogoMobile from "@assets/img/logoMobile.svg";
import { Contacts } from "./components/Contacts";
import styled from "styled-components";
import { Device } from "@shared/styles/media";

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 50px;

  @media ${Device.Laptop} {
    margin-bottom: 0;
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

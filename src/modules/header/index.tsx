import { useIsMobile } from "@shared/hooks/useIsMobile";
import { MobileNavigation } from "./components/MobileNavigation";
import { Navigation } from "./components/Navigation";
import LogoDesktop from "@assets/icons/logoDesktop.svg?component";
import LogoMobile from "@assets/icons/logoMobile.svg?component";
import { Contacts } from "./components/Contacts";
import styled from "styled-components";
import { Device } from "@shared/styles/media";

const Root = styled.div`
  padding-top: 20px;
  padding-right: 20px;
  padding-left: 20px;

  @media ${Device.Tablet} {
    gap: 40px;
  }
  @media ${Device.Laptop} {
    padding-top: 60px;
    padding-right: 60px;
    padding-left: 60px;
  }
`;

const Wrapper = styled.div`
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

  return (
    <Root>
      <Wrapper>
        {isMobile ? <LogoMobile /> : <LogoDesktop />}

        <nav>{isMobile ? <MobileNavigation /> : <Navigation />}</nav>
        {!isMobile && <Contacts />}
      </Wrapper>
    </Root>
  );
};

export { Header };

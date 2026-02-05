import { useIsMobile } from "../../shared/hooks/useIsMobile";
import { MobileNavigation } from "./components/MobileNavigation";
import { Navigation } from "./components/Navigation";
import { logoDesktop, logoMobile } from "../../assets/index";
import { Contacts } from "./components/Contacts";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  const isMobile = useIsMobile();

  return (
    <Root>
      <img src={isMobile ? logoMobile : logoDesktop} alt="" />

      <nav>{isMobile ? <MobileNavigation /> : <Navigation />}</nav>
      {!isMobile && <Contacts />}
    </Root>
  );
};

export { Header };

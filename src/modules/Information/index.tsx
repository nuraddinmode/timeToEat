import { useIsMobile } from "@shared/hooks/useIsMobile";
import { Mobile } from "./components/Mobile";
import { Laptop } from "./components/Laptop";
import styled from "styled-components";
import { Device } from "@shared/styles/media";

const Root = styled.div`
  padding-right: 20px;
  padding-left: 20px;

  @media ${Device.Tablet} {
    gap: 40px;
  }
  @media ${Device.Laptop} {
    padding-right: 60px;
    padding-left: 60px;
  }
`;

const Information = () => {
  const isMobile = useIsMobile();
  return <Root>{isMobile ? <Mobile /> : <Laptop />}</Root>;
};

export { Information };

import { Hero } from "@modules/Hero";
import { Advertisement } from "@modules/Advertisement";
import { Header } from "@modules/Header";
import { Device } from "@shared/styles/media";
import styled from "styled-components";
import { Offers } from "@modules/Offers";
import { Colors } from "@shared/styles/Colors";
import { DietNutrition } from "@modules/Diet";
import { Premium } from "@modules/Premium/";
import PremiumFooter from "@modules/PremiumFooter";
import { AboutService } from "@modules/AboutService";
import { Information } from "@modules/Information";
import { Delivery } from "@modules/Delivery";

const Container = styled.div`
  background-color: ${Colors.background};
  padding: 20px;

  @media ${Device.Tablet} {
    gap: 40px;
  }
  @media ${Device.Laptop} {
    padding: 60px;
  }
`;

const Home = () => {
  return (
    <>
      <Advertisement />
      <Container>
        <Header />
        <Hero />
        <Offers />
        <DietNutrition />
        <Premium />
        <PremiumFooter />
        <AboutService />
        <Information />
        <Delivery />
      </Container>
    </>
  );
};

export { Home };

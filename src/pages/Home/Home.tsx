import { Hero } from "@modules/Hero";
import { Advertisement } from "@modules/Advertisement";
import { Header } from "@modules/Header";
import { Offers } from "@modules/Offers";
import { Diet } from "@modules/Diet";
import { Premium } from "@modules/Premium/";
import { AboutService } from "@modules/AboutService";
import { Information } from "@modules/Information";
import { Delivery } from "@modules/Delivery";
import { Questions } from "@modules/Questions";
import styled from "styled-components";
import { Colors } from "@shared/styles/Colors";
import { Consultation } from "@modules/Consultation";
import { Trial } from "@modules/Trial";
import { Subscription } from "@modules/Subscription";

const Root = styled.div`
  background-color: ${Colors.background};
  max-width: 1500px;
  margin: 0 auto;
`;

const Home = () => {
  return (
    <Root>
      <Advertisement />
      <Header />
      <Hero />
      <Offers />
      <Diet />
      <Premium />
      <AboutService />
      <Information />
      <Delivery />
      <Questions />
      <Consultation />
      <Trial />
      <Subscription />
    </Root>
  );
};

export { Home };

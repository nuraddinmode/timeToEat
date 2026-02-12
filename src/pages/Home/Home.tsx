import { Hero } from "@modules/Hero";
import { Advertisement } from "@modules/Advertisement";
import { Header } from "@modules/Header";
import { Device } from "@shared/styles/media";
import styled from "styled-components";
import { Offers } from "@modules/Offers";
import { Colors } from "@shared/styles/Colors";

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
      </Container>
    </>
  );
};

export { Home };

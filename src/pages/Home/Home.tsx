import { Advertisement } from "../../modules/Advertisement";
import { Header } from "../../modules/Header";
import { Device } from "@shared/styles/media";
import styled from "styled-components";

const Container = styled.div`
  background-color: #faf6f2;
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
      </Container>
    </>
  );
};

export { Home };

import Advertisement from "../../modules/advertisement/components/Advertisement";
import Header from "../../modules/header/components/Header";
import { Container } from "./Home.styles";

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

export default Home;

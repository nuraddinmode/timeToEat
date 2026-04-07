import { Device } from "@shared/styles/media";
import styled from "styled-components";
import { cards } from "./consts";
import { useIsMobile } from "@shared/hooks/useIsMobile";
import { Colors } from "@shared/styles/Colors";
import { Font } from "@shared/fonts";

const Root = styled.div`
  padding-right: 20px;
  padding-left: 20px;

  @media ${Device.Tablet} {
    gap: 40px;
  }
  @media ${Device.Laptop} {
    padding-left: 60px;
    padding-right: 60px;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 420px;
  margin: 0 auto;
  gap: 30px;
  margin-bottom: 50px;

  @media ${Device.Laptop} {
    max-width: 100%;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${Device.Laptop} {
    align-items: start;
  }
`;

const Title = styled.h2`
  color: ${Colors.black};
  text-align: center;
  ${Font.Text.H2}
  margin-bottom: 30px;

  @media ${Device.Laptop} {
    text-align: start;
    margin-bottom: 50px;
  }
`;

const Subtitle = styled.h2`
  color: ${Colors.secondary};
  max-width: 335px;
  text-align: center;
  ${Font.Text.H3}
  margin-bottom: 10px;

  @media ${Device.Laptop} {
    max-width: 420px;
    margin-bottom: 20px;
    text-align: start;
  }
`;
const Paragraph = styled.p`
  color: ${Colors.secondary};
  max-width: 335px;
  text-align: center;
  ${Font.Text.H5}

  @media ${Device.Laptop} {
    max-width: 380px;
    text-align: start;
  }
`;

const StyledIcon = styled.svg`
  margin-bottom: 20px;

  @media ${Device.Laptop} {
    margin-bottom: 30px;
  }
`;

const AboutService = () => {
  const isMobile = useIsMobile();

  return (
    <Root id="aboutUs">
      <Title>О нашем сервисе</Title>
      <Cards>
        {cards.map(({ Icon, laptop, mobile, id }) => (
          <Card key={id}>
            <StyledIcon as={Icon} />
            <Subtitle>{isMobile ? laptop[0] : mobile[0]}</Subtitle>
            <Paragraph>{isMobile ? laptop[1] : mobile[1]}</Paragraph>
          </Card>
        ))}
      </Cards>
    </Root>
  );
};

export { AboutService };

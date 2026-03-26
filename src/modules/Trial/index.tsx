import styled from "styled-components";
import { Button } from "@shared/components/Button";
import { Device } from "@shared/styles/media";
import { Colors } from "@shared/styles/Colors";

const Root = styled.div`
  padding-right: 20px;
  padding-left: 20px;

  @media ${Device.Tablet} {
    gap: 40px;
  }
  @media ${Device.Laptop} {
    padding-right: 60px;
    padding-left: 60px;
    margin-bottom: 110px;
  }
`;

const Wrapper = styled.div`
  max-width: 335px;
  padding: 30px;
  margin: 0 auto;

  @media ${Device.Laptop} {
    margin: 0;
    max-width: 600px;
  }
`;

const Title = styled.h1`
  color: ${Colors.black};
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 20px;

  @media ${Device.Laptop} {
    font-size: 48px;
    text-align: start;
    margin-bottom: 50px;
  }
`;

const DescriptionWrapper = styled.div`
  margin-bottom: 30px;
  @media ${Device.Laptop} {
    margin-bottom: 40px;
    max-width: 772px;
  }
`;

const Description = styled.p`
  color: ${Colors.secondary};
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media ${Device.Laptop} {
    font-size: 16px;
  }
`;

const Trial = () => {
  return (
    <Root>
      <Wrapper>
        <Title>Пробный рацион</Title>
        <DescriptionWrapper>
          <Description>
            Сомневаетесь? Протестируйте наш сервис и еду.
          </Description>
          <Description>
            Начните с пробного меню на два дня со скидкой 20% за 2 800 ₽ (1 200
            ккал)
          </Description>
        </DescriptionWrapper>
        <Button width="195px">Попробовать</Button>
      </Wrapper>
    </Root>
  );
};

export { Trial };

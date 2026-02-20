import ColoredBtn from "./components/ColoredBtn";
import { content } from "./consts";
import { Button } from "@shared/components/Button";
import { useIsMobile } from "@shared/hooks/useIsMobile";
import { Colors } from "@shared/styles/Colors";
import { Device } from "@shared/styles/media";
import styled from "styled-components";

const Root = styled.div`
  background-color: ${Colors.mapColors};
  margin-bottom: 30px;

  @media ${Device.Laptop} {
    border-radius: 30px;
    padding: 30px;
    margin-bottom: 70px;
  }
`;

const Title = styled.div`
  color: ${Colors.black};
  text-align: center;
  font-family: "TT Norms Pro";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 20px;

  @media ${Device.Laptop} {
    text-align: start;
    font-size: 48px;
    margin-bottom: 30px;
  }
`;

const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  @media ${Device.Laptop} {
    margin-bottom: 30px;
    align-items: start;
  }
`;

const Description = styled.p`
  max-width: 335px;
  color: ${Colors.secondary};
  text-align: center;
  font-family: "TT Norms Pro";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media ${Device.Laptop} {
    text-align: start;
    max-width: 1000px;
    font-size: 24px;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media ${Device.Laptop} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 340px;
  flex-wrap: wrap;
  margin-bottom: 30px;

  @media ${Device.Laptop} {
    flex-direction: column;
    gap: 30px;
    margin-bottom: 50px;
  }
`;

const ExtraDescription = styled.p`
  color: ${Colors.secondary};
  text-align: center;
  font-family: "TT Norms Pro";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 20px;

  @media ${Device.Laptop} {
    text-align: start;
    font-size: 16px;
    margin-bottom: 30px;
  }
`;

const Number = styled.p`
  color: ${Colors.secondary};
  text-align: center;
  font-family: "TT Norms Pro";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media ${Device.Laptop} {
    text-align: start;
  }
`;

const Time = styled.p`
  color: var(--brown2, #756d6d);
  font-family: "TT Norms Pro";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;

  @media ${Device.Laptop} {
    text-align: start;
  }
`;

const Contacts = styled.div`
  margin-bottom: 30px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${Device.Laptop} {
    align-items: start;
  }
`;

const Delivery = () => {
  const isMobile = useIsMobile();
  return (
    <Root>
      <Title>Карта доставки</Title>
      <DescWrapper>
        <Description>
          Доставка осуществляется каждый день с 06:00 до 12:00.
        </Description>
        <Description>Выбор интервала — 2 часа.</Description>
      </DescWrapper>
      <MainContent>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Af16d0a0eaa7cd4d51a223fa5149a5953ecc6908407cb4ce2d23b82e239f4538e&amp;source=constructor"
          width={isMobile ? "345" : "982"}
          height={isMobile ? "300" : "580"}
        ></iframe>
        <ContentWrapper>
          <Buttons>
            {content.map((item) => (
              <ColoredBtn key={item.id} color={item.color}>
                {item.text}
              </ColoredBtn>
            ))}
          </Buttons>
          <ExtraDescription>
            Уточните стоимость и время доставки
          </ExtraDescription>
          <Contacts>
            <Number>+7 988 500-1-700</Number>
            <Time>c 09:00 до 21:00</Time>
          </Contacts>
          <Button width="307px">Перезвоните мне</Button>
        </ContentWrapper>
      </MainContent>
    </Root>
  );
};

export { Delivery };

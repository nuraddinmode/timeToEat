import { useIsMobile } from "@shared/hooks/useIsMobile";
import { useState } from "react";
import styled from "styled-components";
import { dish } from "@assets/index";
import { Device } from "@shared/styles/media";
import { Colors } from "@shared/styles/Colors";
import { Button } from "@shared/components/Button";
import { PhoneModal } from "@shared/UI/Modals/PhoneModal";

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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 130px;

  @media ${Device.Laptop} {
    flex-direction: row;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

const Title = styled.h1`
  grid-column: span 4;
  color: ${Colors.black};
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  line-height: normal;
  font-size: 28px;

  @media ${Device.Laptop} {
    font-size: 60px;
    margin-bottom: 88px;
  }
`;

const Description = styled.p`
  grid-column: span 3;
  color: ${Colors.secondary};
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  margin-bottom: 50px;
`;

const HeroMedia = styled.div`
  position: relative;
  width: 100%;
  max-width: 290px;

  @media ${Device.Laptop} {
    max-width: 600px;
  }
`;

const DishImage = styled.img`
  position: relative;
  z-index: 2;
  width: 100%;
  display: block;
`;

const CircleBig = styled.div`
  position: absolute;
  width: 144px;
  height: 144px;
  border-radius: 50%;
  background-color: ${Colors.paleOlive};
  pointer-events: none;

  top: 90px;
  left: -30px;
  z-index: 1;

  @media ${Device.Laptop} {
    width: 274px;
    height: 274px;

    top: 240px;
  }
`;

const CircleSmall = styled.div`
  position: absolute;
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background-color: ${Colors.softTeal};
  pointer-events: none;

  top: 20px;
  right: 10px;
  z-index: 1;

  @media ${Device.Laptop} {
    width: 117px;
    height: 117px;

    top: 60px;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 36px;

  @media ${Device.Laptop} {
    font-size: 20px;
  }
`;

const SecondBtn = styled.button`
  color: ${Colors.primary};
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  &:hover {
    background-color: ${Colors.primary};
    color: ${Colors.white};
    border: 1px solid ${Colors.primary};
    border-radius: 40px;
  }

  @media ${Device.Tablet} {
    padding: 9px 26px;
    border: 1px solid;
    border-radius: 40px;
    line-height: 30px;
    font-size: 16px;
  }
`;

const Hero = () => {
  const isMobile = useIsMobile();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Root>
      <Wrapper>
        <div>
          {isMobile ? (
            <Content>
              <Title>Прогрессивное питание на каждый день</Title>
              <Description>
                Сбалансированный рацион в современном формате — Супер-боул
              </Description>
            </Content>
          ) : (
            <>
              <Title>Доставка прогрессивного питания для гурманов</Title>
            </>
          )}

          <Buttons>
            <Button>Подобрать питание</Button>
            <SecondBtn onClick={() => setIsModalOpen(true)}>
              Получить консультацию
            </SecondBtn>
            <PhoneModal
              title="Консультация"
              description="Предложим подходящую программу, ответим на все ваши вопросы."
              buttonText="Отправить"
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          </Buttons>
        </div>

        <HeroMedia>
          <CircleBig></CircleBig>
          <CircleSmall></CircleSmall>
          <DishImage src={dish} alt="Блюдо" />
        </HeroMedia>
      </Wrapper>
    </Root>
  );
};

export { Hero };

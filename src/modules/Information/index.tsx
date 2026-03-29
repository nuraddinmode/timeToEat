import { useIsMobile } from "@shared/hooks/useIsMobile";
import { Colors } from "@shared/styles/Colors";
import styled from "styled-components";
import { Device } from "@shared/styles/media";
import { salad } from "@assets/index";

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

const Сontainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 335px;
  margin: 0 auto;
  margin-bottom: 20px;

  @media ${Device.Laptop} {
    gap: 0px;
    flex-direction: row;
    align-items: center;
    max-width: 100%;
    margin: 0;
    justify-content: space-between;
    margin-bottom: 50px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 650px;
`;

const Heading = styled.h2`
  color: ${Colors.primary};
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media ${Device.Laptop} {
    color: ${Colors.primary};
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const Descriptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Description = styled.p`
  color: ${Colors.secondary};
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media ${Device.Laptop} {
    font-size: 16px;
  }
`;

const Img = styled.img`
  border-radius: 30px;

  @media ${Device.Laptop} {
    width: 400px;
    height: 400px;
  }
`;

const Information = () => {
  const isMobile = useIsMobile();
  return (
    <Root>
      {isMobile ? (
        <Сontainer>
          <Description>
            Доставка правильного питания «Пора поесть» – это специально
            разработанные программы здорового, раздельного и, несомненно,
            вкусного питания
          </Description>
          <Heading>
            Уникальность проекта заключается в объединении медицинских знаний и
            современных методов приготовления пищи.
          </Heading>
          <Description>
            Программы питания разработаны шеф-поваром нашей компании совместно с
            диетологами. А это предполагает, что организм регулярно будет
            получать в необходимом количестве и оптимальных соотношениях многие
            питательные вещества – белки, жиры, воду, минеральные вещества и
            витамины, а наш шеф-повар позаботился о вкусовых качествах наших
            блюд
          </Description>
          <Img src={salad} alt="" />
        </Сontainer>
      ) : (
        <Сontainer>
          <Wrapper>
            <Heading>
              Попробуйте новый формат рационов — Боулы! Это богатый набор
              полезных веществ и масса вкусовых впечатлений!
            </Heading>
            <Descriptions>
              <Description>
                Боулы — это сбалансированный вариант блюда, содержащего в себе
                все необходимые элементы за счёт большого количества
                компонентов. Ингредиенты блюда не смешиваются между собой, а не
                спеша поедаются по отдельности.
              </Description>
              <Description>
                Мы готовим полноценное здоровое питание на день и ежедневно
                доставляем утром к вашим дверям.
              </Description>
              <Description>
                Наш сервис помогает экономить время, поддерживать стройность,
                работоспособность и укреплять здоровье.
              </Description>
            </Descriptions>
          </Wrapper>
          <Img src={salad} alt="" />
        </Сontainer>
      )}
    </Root>
  );
};

export { Information };

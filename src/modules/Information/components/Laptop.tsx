import { salad } from "@assets/index";
import { Colors } from "@shared/styles/Colors";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 650px;
`;

const Heading = styled.h2`
  color: ${Colors.primary};
  font-family: "TT Norms Pro";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Descriptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Description = styled.p`
  color: ${Colors.secondary};
  font-family: "TT Norms Pro";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Img = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 30px;
`;

const Laptop = () => {
  return (
    <Root>
      <Wrapper>
        <Heading>
          Попробуйте новый формат рационов — Боулы! Это богатый набор полезных
          веществ и масса вкусовых впечатлений!
        </Heading>
        <Descriptions>
          <Description>
            Боулы — это сбалансированный вариант блюда, содержащего в себе все
            необходимые элементы за счёт большого количества компонентов.
            Ингредиенты блюда не смешиваются между собой, а не спеша поедаются
            по отдельности.
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
    </Root>
  );
};

export { Laptop };

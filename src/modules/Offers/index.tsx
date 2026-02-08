import styled from "styled-components";
import Like from "@assets/img/hands.svg";
import Frame from "@assets/img/Frame.svg";
import { Device } from "@shared/styles/media";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media ${Device.Laptop} {
    margin-bottom: 70px;
  }
`;

const Card = styled.div<{ $reverse?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media ${Device.Laptop} {
    flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
    align-items: center;
    justify-content: space-between;
    gap: 80px;
  }
`;

const Subtitle = styled.h2`
  color: #000;
  text-align: center;
  font-family: "TT Norms Pro";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media ${Device.Laptop} {
    font-size: 48px;
  }
`;

const Texts = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  @media ${Device.Laptop} {
    gap: 50px;
  }
`;

const Descriptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Description = styled.p`
  color: #493e3e;
  font-family: "TT Norms Pro";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media ${Device.Laptop} {
    font-size: 20px;
  }
`;

const Offers = () => {
  return (
    <Root>
      <Card>
        <Like />

        <Texts>
          <Subtitle>Еда, которая сделает тебя лучше!</Subtitle>
          <Descriptions>
            <Description>
              Мы помогаем создавать новое качество жизни для наших клиентов,
              чтоб каждый человек был счастливым, здоровым и не отвлекался на
              рутинные процессы.
            </Description>
            <Description>
              Для этого мы создали новый уникальный продукт на рынке доставки
              еды и приглашаем вас окунуться в гастрономический шик уже сегодня.
            </Description>
          </Descriptions>
        </Texts>
      </Card>

      <Card $reverse>
        <Frame />

        <Texts>
          <Subtitle>Изысканное меню высокой кухни</Subtitle>
          <Descriptions>
            <Description>
              В наших блюдах мы продумали каждую деталь, все ингредиенты
              тщательно подобраны и создают неповторимый вкус.
            </Description>
            <Description>
              Качественные продукты, деликатесы и суперфуды, которые помогают
              поддерживать здоровье и обмен веществ. Мы используем крафтовые
              ингредиенты: с любовью выращиваем микрозелень, делаем соусы и
              масла, маринуем мясо, рыбу и морепродукты.
            </Description>
          </Descriptions>
        </Texts>
      </Card>
    </Root>
  );
};

export { Offers };

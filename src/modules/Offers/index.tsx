import styled from "styled-components";
import Like from "@assets/icons/hands.svg?component";
import Frame from "@assets/icons/frame.svg?component";
import { Device } from "@shared/styles/media";
import { Colors } from "@shared/styles/Colors";
import { Font } from "@shared/fonts";

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
  gap: 50px;
  margin-bottom: 50px;

  @media ${Device.Laptop} {
    margin-bottom: 70px;
    gap: 70px;
  }
`;

const Card = styled.div<{ $isReverse?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media ${Device.Laptop} {
    flex-direction: ${({ $isReverse }) => ($isReverse ? "row-reverse" : "row")};
    align-items: center;
    justify-content: space-between;
    gap: 80px;
  }
`;

const Subtitle = styled.h2`
  color: ${Colors.black};
  text-align: center;
  ${Font.Text.H2}
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

const Description = styled.h4`
  color: ${Colors.secondary};
  ${Font.Text.H4}
`;

const Offers = () => {
  return (
    <Root>
      <Wrapper>
        <Card $isReverse={false}>
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
                еды и приглашаем вас окунуться в гастрономический шик уже
                сегодня.
              </Description>
            </Descriptions>
          </Texts>
        </Card>

        <Card $isReverse={true}>
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
      </Wrapper>
    </Root>
  );
};

export { Offers };

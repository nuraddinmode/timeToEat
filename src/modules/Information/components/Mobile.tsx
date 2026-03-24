import { Colors } from "@shared/styles/Colors";
import styled from "styled-components";
import { salad } from "@assets/index";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 335px;
  margin: 0 auto;
  margin-bottom: 20px;
`;

const Heading = styled.h2`
  color: ${Colors.primary};
  font-family: "TT Norms Pro";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Description = styled.p`
  color: ${Colors.secondary};
  font-family: "TT Norms Pro";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Img = styled.img`
  border-radius: 30px;
`;

const Mobile = () => {
  return (
    <Root>
      <Description>
        Доставка правильного питания «Пора поесть» – это специально
        разработанные программы здорового, раздельного и, несомненно, вкусного
        питания
      </Description>
      <Heading>
        Уникальность проекта заключается в объединении медицинских знаний и
        современных методов приготовления пищи.
      </Heading>
      <Description>
        Программы питания разработаны шеф-поваром нашей компании совместно с
        диетологами. А это предполагает, что организм регулярно будет получать в
        необходимом количестве и оптимальных соотношениях многие питательные
        вещества – белки, жиры, воду, минеральные вещества и витамины, а наш
        шеф-повар позаботился о вкусовых качествах наших блюд
      </Description>
      <Img src={salad} alt="" />
    </Root>
  );
};

export { Mobile };

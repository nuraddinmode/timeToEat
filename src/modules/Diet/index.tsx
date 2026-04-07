import { ButtonSelect } from "@shared/components/ButtonSelect";
import { ButtonSelectContainer } from "@shared/components/ButtonSelectContainer";
import { Button } from "@shared/components/Button";
// import Arrow from "@assets/icons/arrow.svg?component";
import styled from "styled-components";
import { Colors } from "@shared/styles/Colors";
import { Device } from "@shared/styles/media";
import { activities } from "./consts";
import { goals } from "./consts";
import { Font } from "@shared/fonts";

const Root = styled.div`
  @media ${Device.Tablet} {
    gap: 40px;
  }
  @media ${Device.Laptop} {
    padding-left: 60px;
    padding-right: 60px;
  }
`;

const Wrapper = styled.form`
  padding: 20px 10px 30px 10px;
  background-color: ${Colors.background.tertiary};

  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${Device.Laptop} {
    padding: 20px 100px 30px 10px;
    border-radius: 15px;
    margin-bottom: 70px;
    padding-top: 30px;
    padding-left: 30px;
    padding-bottom: 30px;
  }
`;

const Title = styled.h3`
  color: ${Colors.black};
  text-align: center;
  margin: 0 auto;
  ${Font.Text.H3}
  margin-bottom: 40px;
  width: 60%;

  @media ${Device.Laptop} {
    margin-bottom: 50px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${Device.Laptop} {
    flex-direction: row;
    gap: 30px;
  }
`;

const Rows = styled.div`
  max-width: 520px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 30px;

  @media ${Device.Laptop} {
    max-width: 100%;
    flex-direction: row;
    align-items: center;
    margin-bottom: 0;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 30px;

  @media ${Device.Laptop} {
    display: flex;
    align-items: center;
  }
`;

const GenderLabel = styled.label`
  color: ${Colors.text.comment};
  ${Font.Text.P}
  position: absolute;
  top: -40%;
  left: 40%;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 13px 15px;
  border-radius: 60px;
  background-color: ${Colors.background.primary};
  text-align: center;

  &::placeholder {
    color: ${Colors.secondary};
    ${Font.Text.H5}
  }
`;

const StyledSelect = styled.select`
  padding: 13px 15px;
  border-radius: 60px;

  background-color: ${Colors.background.primary};
  color: ${Colors.secondary};
  ${Font.Text.H5}
  text-align: center;
`;

const RowOfTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 30px;

  @media ${Device.Laptop} {
    display: flex;
    align-items: center;
  }
`;
const RowColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media ${Device.Laptop} {
    display: flex;
    align-items: center;
  }
`;

const Diet = () => {
  return (
    <Root id="diet">
      <Wrapper>
        <Title>Подберите рацион для своих целей</Title>
        <Content>
          <Rows>
            <Row>
              <ButtonSelectContainer border={false}>
                <GenderLabel htmlFor="">Пол</GenderLabel>
                <ButtonSelect>Ж</ButtonSelect>
                <ButtonSelect>М</ButtonSelect>
              </ButtonSelectContainer>
              <StyledInput type="text" placeholder="Ваш вес" />
              <StyledInput type="text" placeholder="Ваш рост" />
            </Row>
            <RowOfTwo>
              <StyledInput type="text" placeholder="Ваш возраст" />
              <StyledSelect name="activity" id="">
                {activities.map(({ id, option, value }) => (
                  <option key={id} value={value}>
                    {option}
                  </option>
                ))}
              </StyledSelect>
            </RowOfTwo>
            <RowColumn>
              <StyledSelect name="goal">
                {goals.map(({ option, value, id }) => (
                  <option key={id} value={value}>
                    {option}
                  </option>
                ))}
                {/* <Arrow /> */}
              </StyledSelect>
            </RowColumn>
          </Rows>
          <Button width="208px">Рассчитать рацион</Button>
        </Content>
      </Wrapper>
    </Root>
  );
};

export { Diet };

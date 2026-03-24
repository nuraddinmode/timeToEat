import { Colors } from "@shared/styles/Colors";
import { Device } from "@shared/styles/media";
import styled from "styled-components";
import { Button } from "@shared/components/Button";
import { woman } from "@assets/index";
import { DataInput } from "@shared/components/DataInput";

const Root = styled.div`
  padding-right: 20px;
  padding-left: 20px;

  @media ${Device.Tablet} {
    gap: 40px;
  }
  @media ${Device.Laptop} {
    padding-right: 60px;
    padding-left: 60px;
    margin-bottom: 60px;
  }
`;

const Container = styled.div`
  padding: 30px;
  background: ${Colors.premiumFooter};
  border-radius: 30px;
  position: relative;

  @media ${Device.Laptop} {
  }
`;

const Title = styled.h1`
  color: ${Colors.white};
  text-align: center;
  font-family: "TT Norms Pro";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 30px;
  max-width: 335px;

  @media ${Device.Laptop} {
    font-size: 48px;
    max-width: 600px;
    text-align: start;
    margin-bottom: 50px;
  }
`;

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 30px;
  align-items: center;

  @media ${Device.Laptop} {
    flex-direction: row;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;

  @media ${Device.Laptop} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 58px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 308px;

  @media ${Device.Laptop} {
    align-items: start;
    margin-bottom: 0;
  }
`;

const WomanImg = styled.img`
  width: 250px;
  height: 287px;
  position: absolute;
  bottom: 0;
  right: 50%;
  transform: translate(50%, 0);

  @media ${Device.Laptop} {
    width: auto;
    height: auto;

    right: 140px;
    transform: translate(0, 0);
  }
`;

const Consultation = () => {
  return (
    <Root>
      <Container>
        <Wrapper>
          <Content>
            <Title>Бесплатная консультация диетолога</Title>
            <form action="">
              <InputsWrapper>
                <DataInput type="text" placeholder="Ваше имя" />
                <DataInput type="text" placeholder="Телефон" />
              </InputsWrapper>
              <ButtonWrapper>
                <Button width="308px">Отправить заявку</Button>
              </ButtonWrapper>
            </form>
          </Content>
          <WomanImg src={woman} alt="woman" />
        </Wrapper>
      </Container>
    </Root>
  );
};

export { Consultation };

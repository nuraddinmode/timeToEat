import styled from "styled-components";
import { Device } from "@shared/styles/media";
import { DataInput } from "@shared/components/DataInput";
import Email from "@assets/icons/email.svg?component";
import { Colors } from "@shared/styles/Colors";
import { Button } from "@shared/components/Button";

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

const Wrapper = styled.div`
  padding: 30px;
  background-color: ${Colors.brown};
  border-radius: 30px;

  @media ${Device.Laptop} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Title = styled.h2`
  color: ${Colors.white};
  text-align: center;
  font-family: "TT Norms Pro";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 15px;

  @media ${Device.Laptop} {
    font-size: 48px;
    text-align: start;
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;

  @media ${Device.Laptop} {
    flex-direction: row;
    align-items: start;
    gap: 15px;
    margin-bottom: 0;
  }
`;

const Desctiption = styled.p`
  color: ${Colors.white};
  font-family: "TT Norms Pro";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  max-width: 295px;
  text-align: center;

  @media ${Device.Laptop} {
    font-size: 16px;
    max-width: fit-content;
    text-align: start;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media ${Device.Laptop} {
    gap: 20px;
    flex-direction: row;
    max-height: 47px;
  }
`;

const Subscription = () => {
  return (
    <Root>
      <Wrapper>
        <div>
          <Title>Будьте всегда в курсе!</Title>
          <DescriptionContainer>
            <Email />
            <Desctiption>
              Подпишитесь на рассылку и будьте всегда в курсе новинок, акций и
              новостей!
            </Desctiption>
          </DescriptionContainer>
        </div>
        <FormContainer>
          <DataInput type="text" placeholder="Укажите вашу почту"></DataInput>
          <Button width="160px">Подписаться</Button>
        </FormContainer>
      </Wrapper>
    </Root>
  );
};

export { Subscription };

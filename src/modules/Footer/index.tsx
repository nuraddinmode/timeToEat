import styled from "styled-components";
import { Colors } from "@shared/styles/Colors";
import { Device } from "@shared/styles/media";
import { visa, masterCard, mir, googlePay, applePay } from "@assets/index";
import { Font } from "@shared/fonts";

const Root = styled.div`
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 20px;

  @media ${Device.Tablet} {
    gap: 40px;
  }
  @media ${Device.Laptop} {
    padding-right: 60px;
    padding-left: 60px;
    padding-bottom: 68px;
  }
`;

const SecondRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${Device.Laptop} {
    display: block;
  }
`;
const Logo = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${Colors.primary};
`;

const LogoContainer = styled.div`
  display: flex;
  gap: 30px;
`;

const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${Device.Laptop} {
    align-items: start;
  }
`;

const Payment = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
  @media ${Device.Laptop} {
    gap: 10px;
  }
`;

const PaymentAndText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media ${Device.Laptop} {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
`;

const FirstRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 30px;
  align-items: center;

  @media ${Device.Laptop} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const Number = styled.h3`
  ${Font.Text.H3};
  color: ${Colors.secondary};
`;

const WorkTime = styled.p`
  ${Font.Text.P};
  color: ${Colors.text.comment};
`;

const Email = styled.a`
  ${Font.Text.H3};
  color: ${Colors.secondary};
`;

const Description = styled.h5`
  ${Font.Text.H5};
  color: ${Colors.secondary};
  max-width: 335px;
  text-align: center;
  margin-bottom: 10px;

  @media ${Device.Laptop} {
    max-width: 600px;
    text-align: start;
  }
`;

const ExtraDescription = styled.p`
  ${Font.Text.P};
  color: ${Colors.text.comment};
  font-size: 10px;
  max-width: 335px;

  @media ${Device.Laptop} {
    font-size: 12px;
    max-width: 700px;
  }
`;

const Footer = () => {
  return (
    <Root>
      <FirstRow>
        <TimeContainer>
          <Number>+7 988 500 17-00</Number>
          <WorkTime>Ежедневно c 09:00 до 21:00</WorkTime>
        </TimeContainer>
        <Email href="mailto:hello@pora-poest.com">hello@pora-poest.com</Email>
        <LogoContainer>
          <Logo />
          <Logo />
          <Logo />
        </LogoContainer>
      </FirstRow>
      <SecondRow>
        <Description>
          ООО «ПораПоесть», г. Краснодар, ул. Кубанская Набережная улица, дом 5,
          офис 4
        </Description>
        <Description>
          © 2021 ПораПоесть — сервис доставки прогрессивного питания.{" "}
        </Description>
        <PaymentAndText>
          <Payment>
            <img src={visa} alt="visa" />
            <img src={masterCard} alt="masterCard" />
            <img src={mir} alt="mir" />
            <img src={googlePay} alt="googlePay" />
            <img src={applePay} alt="applePay" />
          </Payment>
          <ExtraDescription>
            Фотографии блюд на сайте являются вариантом сервировки блюда.
            Внешний вид блюда может отличаться от фотографии на сайте. Указывая
            электронную почту и номер телефона на сайте, вы соглашаетесь с
            условиями Публичной оферты и Политикой конфедициальности
          </ExtraDescription>
        </PaymentAndText>
      </SecondRow>
    </Root>
  );
};

export { Footer };

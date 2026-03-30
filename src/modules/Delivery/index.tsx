import { ColoredBtn } from "./components/ColoredBtn";
import { content } from "./consts";
import { Button } from "@shared/components/Button";
import { useIsMobile } from "@shared/hooks/useIsMobile";
import { Colors } from "@shared/styles/Colors";
import { Device } from "@shared/styles/media";
import styled from "styled-components";
import { useState } from "react";
import { SharedModal } from "@shared/UI/Modals/SharedModal";
import { DataInput } from "@shared/components/DataInput";
import { SuccessModal } from "@shared/UI/Modals/SuccessModal";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { phoneSchema } from "@shared/schema";
import { PatternFormat } from "react-number-format";

const Root = styled.div`
  @media ${Device.Tablet} {
    gap: 40px;
  }
  @media ${Device.Laptop} {
    padding-right: 60px;
    padding-left: 60px;
  }
`;

const Wrapper = styled.div`
  background-color: ${Colors.cream};
  margin-bottom: 30px;
  padding: 30px;

  @media ${Device.Laptop} {
    border-radius: 30px;
    padding: 30px;
    margin-bottom: 70px;
  }
`;

const Title = styled.div`
  color: ${Colors.black};
  text-align: center;

  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 20px;

  @media ${Device.Laptop} {
    text-align: start;
    font-size: 48px;
    margin-bottom: 30px;
  }
`;

const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  @media ${Device.Laptop} {
    margin-bottom: 30px;
    align-items: start;
  }
`;

const Description = styled.p`
  max-width: 335px;
  color: ${Colors.secondary};
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media ${Device.Laptop} {
    text-align: start;
    max-width: 1000px;
    font-size: 24px;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media ${Device.Laptop} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 340px;
  flex-wrap: wrap;
  margin-bottom: 30px;

  @media ${Device.Laptop} {
    flex-direction: column;
    gap: 30px;
    margin-bottom: 50px;
  }
`;

const ExtraDescription = styled.p`
  color: ${Colors.secondary};
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 20px;

  @media ${Device.Laptop} {
    text-align: start;
    font-size: 16px;
    margin-bottom: 30px;
  }
`;

const Number = styled.p`
  color: ${Colors.secondary};
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media ${Device.Laptop} {
    text-align: start;
  }
`;

const Time = styled.p`
  color: ${Colors.mutedGray};
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;

  @media ${Device.Laptop} {
    text-align: start;
  }
`;

const Contacts = styled.div`
  margin-bottom: 30px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${Device.Laptop} {
    align-items: start;
  }
`;

const ModalTitle = styled.h1`
  color: ${Colors.black};
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 32px;
`;

const ModalDescription = styled.p`
  color: ${Colors.secondary};
  text-align: center;
  font-family: "TT Norms Pro";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-bottom: 30px;
`;

type FormData = {
  phone: string;
};

const Delivery = () => {
  const isMobile = useIsMobile();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(phoneSchema),
    defaultValues: {
      phone: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("CALL REQUEST:", data);

    setIsSuccess(true); // 👉 показываем success
    reset();
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setIsSuccess(false);
  };

  return (
    <Root>
      <Wrapper>
        <Title>Карта доставки</Title>

        <DescWrapper>
          <Description>
            Доставка осуществляется каждый день с 06:00 до 12:00.
          </Description>
          <Description>Выбор интервала — 2 часа.</Description>
        </DescWrapper>

        <MainContent>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Af16d0a0eaa7cd4d51a223fa5149a5953ecc6908407cb4ce2d23b82e239f4538e&amp;source=constructor"
            width={isMobile ? "345" : "982"}
            height={isMobile ? "300" : "580"}
          />

          <ContentWrapper>
            <Buttons>
              {content.map((item) => (
                <ColoredBtn key={item.id} color={item.color}>
                  {item.text}
                </ColoredBtn>
              ))}
            </Buttons>

            <ExtraDescription>
              Уточните стоимость и время доставки
            </ExtraDescription>

            <Contacts>
              <Number>+7 988 500-1-700</Number>
              <Time>c 09:00 до 21:00</Time>
            </Contacts>

            <Button onClick={() => setIsModalOpen(true)} width="307px">
              Перезвоните мне
            </Button>

            <SharedModal isOpen={isModalOpen} onClose={handleClose}>
              {isSuccess ? (
                <SuccessModal onClose={handleClose} />
              ) : (
                <>
                  <ModalTitle>Заказ обратного звонка</ModalTitle>

                  <ModalDescription>
                    Введи номер телефона, на который необходимо перезвонить
                  </ModalDescription>

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                      name="phone"
                      control={control}
                      render={({ field }) => (
                        <PatternFormat
                          value={field.value}
                          onValueChange={(values) =>
                            field.onChange(values.value)
                          }
                          customInput={DataInput}
                          format="+7 (###) ### ##-##"
                          mask="_"
                          placeholder="Телефон"
                          marginBottom="30px"
                        />
                      )}
                    />

                    {errors.phone && (
                      <p style={{ color: "red", marginBottom: "10px" }}>
                        {errors.phone.message}
                      </p>
                    )}

                    <Button width="307px" type="submit">
                      Перезвоните мне
                    </Button>
                  </form>
                </>
              )}
            </SharedModal>
          </ContentWrapper>
        </MainContent>
      </Wrapper>
    </Root>
  );
};

export { Delivery };

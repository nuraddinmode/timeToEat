import { useIsMobile } from "@shared/hooks/useIsMobile";
import { useState } from "react";
import styled from "styled-components";
import { dish } from "@assets/index";
import { Device } from "@shared/styles/media";
import { Colors } from "@shared/styles/Colors";
import { Button } from "@shared/components/Button";
import { SharedModal } from "@shared/UI/Modals/SharedModal";
import { DataInput } from "@shared/components/DataInput";
import { SuccessModal } from "@shared/UI/Modals/SuccessModal";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { phoneSchema } from "@shared/schema";
import { PatternFormat } from "react-number-format";
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
  align-items: center;
  margin-bottom: 130px;

  @media ${Device.Laptop} {
    flex-direction: row;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

const Title = styled.h1`
  grid-column: span 4;
  color: ${Colors.black};
  ${Font.Text.H1}
  @media ${Device.Laptop} {
    margin-bottom: 88px;
  }
`;

const Description = styled.h6`
  grid-column: span 3;
  color: ${Colors.secondary};
  ${Font.Text.H6}
  margin-bottom: 50px;
`;

const HeroMedia = styled.div`
  position: relative;
  width: 100%;
  max-width: 290px;

  @media ${Device.Laptop} {
    max-width: 600px;
  }
`;

const DishImage = styled.img`
  position: relative;
  z-index: 2;
  width: 100%;
`;

const CircleBig = styled.div`
  position: absolute;
  width: 144px;
  height: 144px;
  border-radius: 50%;
  background-color: ${Colors.ui.large};
  top: 90px;
  left: -30px;
  z-index: 1;

  @media ${Device.Laptop} {
    width: 274px;
    height: 274px;
    top: 240px;
  }
`;

const CircleSmall = styled.div`
  position: absolute;
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background-color: ${Colors.ui.small};
  top: 20px;
  right: 10px;
  z-index: 1;

  @media ${Device.Laptop} {
    width: 117px;
    height: 117px;
    top: 60px;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 36px;
`;

const SecondBtn = styled.button`
  color: ${Colors.primary};
  font-weight: 700;

  &:hover {
    text-decoration-line: underline;
  }
`;

const ModalTitle = styled.h2`
  ${Font.Text.H2}
  text-align: center;
  margin-bottom: 32px;
`;

const ModalDescription = styled.h5`
  ${Font.Text.H5}
  text-align: center;
  margin-bottom: 30px;
`;

type FormData = {
  phone: string;
};

const Hero = () => {
  const isMobile = useIsMobile();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const scrollToPremium = () => {
    const el = document.getElementById("premium");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

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
    console.log("SEND:", data);

    setIsSuccess(true);
    reset();
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setIsSuccess(false);
  };

  return (
    <Root>
      <Wrapper>
        <div>
          {isMobile ? (
            <Content>
              <Title>Прогрессивное питание на каждый день</Title>
              <Description>
                Сбалансированный рацион в современном формате — Супер-боул
              </Description>
            </Content>
          ) : (
            <Title>Доставка прогрессивного питания для гурманов</Title>
          )}

          <Buttons>
            <Button onClick={scrollToPremium}>Подобрать питание</Button>

            <SecondBtn onClick={() => setIsModalOpen(true)}>
              Получить консультацию
            </SecondBtn>

            <SharedModal isOpen={isModalOpen} onClose={handleClose}>
              {isSuccess ? (
                <SuccessModal onClose={handleClose} />
              ) : (
                <>
                  <ModalTitle>Консультация</ModalTitle>

                  <ModalDescription>
                    Предложим подходящую программу, ответим на все ваши вопросы.
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
                      Отправить
                    </Button>
                  </form>
                </>
              )}
            </SharedModal>
          </Buttons>
        </div>

        <HeroMedia>
          <CircleBig />
          <CircleSmall />
          <DishImage src={dish} alt="Блюдо" />
        </HeroMedia>
      </Wrapper>
    </Root>
  );
};

export { Hero };

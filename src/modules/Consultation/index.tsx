import { Colors } from "@shared/styles/Colors";
import { Device } from "@shared/styles/media";
import styled from "styled-components";
import { Button } from "@shared/components/Button";
import { woman } from "@assets/index";
import { DataInput } from "@shared/components/DataInput";
import { SuccessModal } from "@shared/UI/Modals/SuccessModal";
import { useState } from "react";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { nameAndPhoneSchema } from "@shared/schema";
import { PatternFormat } from "react-number-format";
import { cleanName, normalizeName } from "@shared/helpers/cleanName";
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
    margin-bottom: 60px;
  }
`;

const Container = styled.div`
  padding: 30px;
  background: ${Colors.background.secondary};
  border-radius: 30px;
  position: relative;
`;

const Title = styled.h1`
  color: ${Colors.white};
  ${Font.Text.H2}
  text-align: center;
  margin-bottom: 30px;
  max-width: 335px;

  @media ${Device.Laptop} {
    max-width: 600px;
    text-align: start;
    margin-bottom: 50px;
  }
`;

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
  align-items: center;

  @media ${Device.Laptop} {
    flex-direction: row;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const ErrorText = styled.p`
  position: absolute;
  bottom: -18px;
  ${Font.Text.P}
  color: white;
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

type FormData = {
  name: string;
  phone: string;
};

const Consultation = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(nameAndPhoneSchema),
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("CONSULTATION:", data);

    setIsSuccess(true);
    reset();
  };

  return (
    <Root id="consultation">
      <Container>
        <Wrapper>
          <Content>
            <Title>Бесплатная консультация диетолога</Title>

            {isSuccess ? (
              <SuccessModal onClose={() => setIsSuccess(false)} />
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <InputsWrapper>
                  <Field>
                    <Controller
                      name="name"
                      control={control}
                      render={({ field }) => (
                        <DataInput
                          value={field.value || ""}
                          type="text"
                          placeholder="Ваше имя"
                          onChange={(e) => {
                            const cleaned = cleanName(e.target.value);
                            const normalized = normalizeName(cleaned);

                            field.onChange(normalized);
                          }}
                        />
                      )}
                    />

                    {errors.name && (
                      <ErrorText>{errors.name.message}</ErrorText>
                    )}
                  </Field>

                  <Field>
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
                        />
                      )}
                    />

                    {errors.phone && (
                      <ErrorText>{errors.phone.message}</ErrorText>
                    )}
                  </Field>
                </InputsWrapper>

                <ButtonWrapper>
                  <Button width="308px" type="submit">
                    Отправить заявку
                  </Button>
                </ButtonWrapper>
              </form>
            )}
          </Content>

          <WomanImg src={woman} alt="woman" />
        </Wrapper>
      </Container>
    </Root>
  );
};

export { Consultation };

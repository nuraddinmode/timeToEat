import styled from "styled-components";
import { Button } from "@shared/components/Button";
import { Device } from "@shared/styles/media";
import { Colors } from "@shared/styles/Colors";
import { useState } from "react";
import { SharedModal } from "@shared/UI/Modals/SharedModal";
import { DataInput } from "@shared/components/DataInput";
import { SuccessModal } from "@shared/UI/Modals/SuccessModal";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { tripleSchema } from "@shared/schema";
import { PatternFormat } from "react-number-format";
import { cleanName, normalizeName } from "@shared/helpers/cleanName";

const Root = styled.div`
  padding-right: 20px;
  padding-left: 20px;

  @media ${Device.Tablet} {
    gap: 40px;
  }
  @media ${Device.Laptop} {
    padding-right: 60px;
    padding-left: 60px;
    margin-bottom: 110px;
  }
`;

const Wrapper = styled.div`
  max-width: 335px;
  padding: 30px;
  margin: 0 auto;

  @media ${Device.Laptop} {
    margin: 0;
    max-width: 600px;
  }
`;

const Title = styled.h1`
  color: ${Colors.black};
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;

  @media ${Device.Laptop} {
    font-size: 48px;
    text-align: start;
    margin-bottom: 50px;
  }
`;

const DescriptionWrapper = styled.div`
  margin-bottom: 30px;

  @media ${Device.Laptop} {
    margin-bottom: 40px;
    max-width: 772px;
  }
`;

const Description = styled.p`
  color: ${Colors.secondary};
  font-size: 18px;

  @media ${Device.Laptop} {
    font-size: 16px;
  }
`;

const ModalTitle = styled.h1`
  text-align: center;
  font-size: 28px;
  margin-bottom: 32px;
`;

const ModalDescription = styled.p`
  text-align: center;
  margin-bottom: 30px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 6px;
`;

type FormData = {
  name: string;
  address: string;
  phone: string;
};

const Trial = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(tripleSchema),
    defaultValues: {
      name: "",
      address: "",
      phone: "",
    },
  });

  const onSubmit = (formData: FormData) => {
    console.log("TRIAL:", formData);

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
        <Title>Пробный рацион</Title>

        <DescriptionWrapper>
          <Description>
            Сомневаетесь? Протестируйте наш сервис и еду.
          </Description>
          <Description>
            Начните с пробного меню на два дня со скидкой 20% за 2 800 ₽ (1 200
            ккал)
          </Description>
        </DescriptionWrapper>

        <Button width="195px" onClick={() => setIsModalOpen(true)}>
          Попробовать
        </Button>

        <SharedModal isOpen={isModalOpen} onClose={handleClose}>
          {isSuccess ? (
            <SuccessModal onClose={handleClose} />
          ) : (
            <>
              <ModalTitle>Пробный рацион</ModalTitle>

              <ModalDescription>
                После отправки формы мы свяжемся с вами для уточнения всех
                деталей
              </ModalDescription>

              <form onSubmit={handleSubmit(onSubmit)}>
                {/* NAME */}
                <Field>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <DataInput
                        marginBottom="30px"
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
                  {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
                </Field>

                {/* ADDRESS */}
                <Field>
                  <Controller
                    name="address"
                    control={control}
                    render={({ field }) => (
                      <DataInput
                        {...field}
                        marginBottom="30px"
                        type="text"
                        placeholder="Адрес доставки"
                      />
                    )}
                  />
                  {errors.address && (
                    <ErrorText>{errors.address.message}</ErrorText>
                  )}
                </Field>

                {/* PHONE */}
                <Field>
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                      <PatternFormat
                        marginBottom="30px"
                        value={field.value}
                        onValueChange={(values) => field.onChange(values.value)}
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

                <Button width="307px" type="submit">
                  Отправить заказ
                </Button>
              </form>
            </>
          )}
        </SharedModal>
      </Wrapper>
    </Root>
  );
};

export { Trial };

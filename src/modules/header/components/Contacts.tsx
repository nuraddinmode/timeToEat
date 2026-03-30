import { Colors } from "@shared/styles/Colors";
import styled from "styled-components";
import { useState } from "react";
import { DataInput } from "@shared/components/DataInput";
import { Button } from "@shared/components/Button";
import { SharedModal } from "@shared/UI/Modals/SharedModal";
import { SuccessModal } from "@shared/UI/Modals/SuccessModal";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { phoneSchema } from "@shared/schema";
import { PatternFormat } from "react-number-format";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const Anchor = styled.button`
  color: #4d8f76;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;

const Number = styled.a`
  color: ${Colors.secondary};
  text-align: right;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Time = styled.p`
  color: ${Colors.mutedGray};
  text-align: right;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
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

const Contacts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

    setIsSuccess(true);

    reset();
  };

  const [isSuccess, setIsSuccess] = useState(false);

  const handleClose = () => {
    setIsModalOpen(false);
    setIsSuccess(false); // сбрасываем состояние
  };

  return (
    <Root>
      <Anchor onClick={() => setIsModalOpen(true)}>Перезвоните мне</Anchor>
      <Number href="tel:+7 988 500-1-700">+7 988 500-1-700</Number>
      <Time>c 09:00 до 21:00</Time>
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
                    onValueChange={(values) => field.onChange(values.value)}
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
    </Root>
  );
};

export { Contacts };

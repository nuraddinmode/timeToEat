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
import { Font } from "@shared/fonts";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const Anchor = styled.button`
  color: ${Colors.primary};
  ${Font.Text.H6}
  text-decoration-line: underline;
  cursor: pointer;
`;

const Number = styled.a`
  color: ${Colors.secondary};
  text-align: right;
  ${Font.Text.H3}
`;

const Time = styled.p`
  color: ${Colors.text.comment};
  text-align: right;
  ${Font.Text.P}
`;

const ModalTitle = styled.h2`
  color: ${Colors.black};
  ${Font.Text.H3}
  margin-bottom: 32px;
`;

const ModalDescription = styled.h5`
  color: ${Colors.secondary};
  ${Font.Text.H5}
  text-align: center;
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
    setIsSuccess(false);
  };

  return (
    <Root>
      <Anchor onClick={() => setIsModalOpen(true)}>Перезвоните мне</Anchor>
      <Number href="tel:+79885001700">+7 988 500-17-00</Number>
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

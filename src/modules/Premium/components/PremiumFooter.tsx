import styled from "styled-components";
import { Colors } from "@shared/styles/Colors";
import { Button } from "@shared/components/Button";
import { Device } from "@shared/styles/media";
import HandOnTable from "@assets/icons/handOnTable.svg?component";
import { useMealPlanStore } from "../store";
import { calories, continuity } from "../consts";
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
  background-color: ${Colors.sageGreen};
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;

  @media ${Device.Laptop} {
    padding: 30px;
    justify-content: space-between;
    flex-direction: row;
    border-radius: 0 0 30px 30px;
    margin-bottom: 70px;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  @media ${Device.Laptop} {
    gap: 10px;
  }
`;

const FooterDescription = styled.p`
  font-family: "Roboto", sans-serif;
  color: ${Colors.white};
  font-size: 14px;

  @media ${Device.Laptop} {
    font-size: 16px;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media ${Device.Laptop} {
    align-items: start;
  }
`;

const FooterSubtitle = styled.h2`
  font-family: "Roboto", sans-serif;
  color: ${Colors.white};
  font-size: 20px;
  text-align: center;

  @media ${Device.Laptop} {
    text-align: start;
    font-size: 24px;
  }
`;

const DescriptionTwo = styled.p`
  font-family: "Roboto", sans-serif;
  color: ${Colors.white};
  font-size: 14px;
  text-align: center;
  max-width: 335px;

  @media ${Device.Laptop} {
    font-size: 16px;
    text-align: start;
  }
`;

const ModalTitle = styled.h1`
  font-family: "Roboto", sans-serif;
  text-align: center;
  font-size: 28px;
  margin-bottom: 32px;
`;

const ModalDescription = styled.p`
  font-family: "Roboto", sans-serif;
  text-align: center;
  margin-bottom: 30px;
`;

type FormData = {
  name: string;
  address: string;
  phone: string;
};
const PremiumFooter = () => {
  const pricePerDay = useMealPlanStore((s) => s.pricePerDay);
  const totalPrice = useMealPlanStore((s) => s.totalPrice);
  const selectedCalories = useMealPlanStore((s) => s.selectedCalories);
  const selectedDuration = useMealPlanStore((s) => s.selectedDuration);

  const daysInWeek =
    continuity.find((c) => c.id === selectedDuration)?.daysInWeek ?? 0;

  const selectedCaloryHeading =
    calories.find((c) => c.id === selectedCalories)?.heading ?? "";

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
    const finalData = {
      ...formData,
      calories: selectedCaloryHeading,
      duration: selectedDuration,
      days: daysInWeek,
      pricePerDay,
      totalPrice,
    };

    console.log("ORDER:", finalData);

    setIsSuccess(true); // 👉 показываем success
    reset();
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setIsSuccess(false);
  };

  return (
    <Root>
      <Left>
        <Button onClick={() => setIsModalOpen(true)}>
          Заказать {daysInWeek} дней питания за {totalPrice} ₽
        </Button>

        <SharedModal isOpen={isModalOpen} onClose={handleClose}>
          {isSuccess ? (
            <SuccessModal onClose={handleClose} />
          ) : (
            <>
              <ModalTitle>Оформление заказа</ModalTitle>

              <ModalDescription>
                После отправки формы мы свяжемся с вами для уточнения всех
                деталей
              </ModalDescription>

              <form onSubmit={handleSubmit(onSubmit)}>
                {/* NAME */}
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
                {errors.name && (
                  <p style={{ color: "red", marginBottom: "10px" }}>
                    {errors.name.message}
                  </p>
                )}

                {/* ADDRESS */}
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
                  <p style={{ color: "red", marginBottom: "10px" }}>
                    {errors.address.message}
                  </p>
                )}

                {/* PHONE */}
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
                  <p style={{ color: "red", marginBottom: "10px" }}>
                    {errors.phone.message}
                  </p>
                )}

                <Button width="307px" type="submit">
                  Отправить заказ
                </Button>
              </form>
            </>
          )}
        </SharedModal>

        <FooterDescription>
          {selectedCaloryHeading} за {pricePerDay} ₽ в день
        </FooterDescription>
      </Left>

      <HandOnTable />

      <Right>
        <FooterSubtitle>Будем доставлять наборы каждый день.</FooterSubtitle>

        <DescriptionTwo>
          Доставка осуществляется каждый день с 06:00 до 12:00. Выбор интервала
          — 2 часа.
        </DescriptionTwo>
      </Right>
    </Root>
  );
};

export { PremiumFooter };

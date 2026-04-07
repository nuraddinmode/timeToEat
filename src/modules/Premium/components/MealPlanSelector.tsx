import { useState } from "react";
import styled from "styled-components";
import { RadioBtn } from "./RadioBtn";
import { Colors } from "@shared/styles/Colors";
import { Device } from "@shared/styles/media";
import { calories } from "../consts";
import { continuity } from "../consts";
import { calculatePrice } from "../model/calculatePrice";
import { useMealPlanStore } from "../store";

import { SharedModal } from "@shared/UI/Modals/SharedModal";
import { SuccessModal } from "@shared/UI/Modals/SuccessModal";
import { DataInput } from "@shared/components/DataInput";
import { Button } from "@shared/components/Button";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { phoneSchema } from "@shared/schema";
import { PatternFormat } from "react-number-format";
import { Font } from "@shared/fonts";

const SectionNaming = styled.h3`
  color: ${Colors.secondary};
  text-align: center;
  ${Font.Text.H4}
  margin-bottom:10px;

  @media ${Device.Laptop} {
    text-align: start;
  }
`;

const RadioWrapper = styled.div<{ $margin: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-bottom: ${({ $margin }) => $margin}px;
  flex-wrap: wrap;

  @media ${Device.Laptop} {
    flex-wrap: nowrap;
  }
`;

const ModalTitle = styled.h3`
  ${Font.Text.H3}
  margin-bottom: 32px;
`;

const ModalDescription = styled.h5`
  ${Font.Text.H5}
  text-align: center;
  margin-bottom: 30px;
`;

const MealPlanSelector = () => {
  const selectedCalories = useMealPlanStore((s) => s.selectedCalories);
  const setSelectedCalories = useMealPlanStore((s) => s.setSelectedCalories);

  const selectedDuration = useMealPlanStore((s) => s.selectedDuration);
  const setSelectedDuration = useMealPlanStore((s) => s.setSelectedDuration);

  const setMealsCount = useMealPlanStore((s) => s.setMealsCount);
  const setPricePerDay = useMealPlanStore((s) => s.setPricePerDay);
  const setTotalPrice = useMealPlanStore((s) => s.setTotalPrice);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"custom" | "trial" | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(phoneSchema),
    defaultValues: {
      phone: "",
    },
  });

  const onSubmit = (data: { phone: string }): void => {
    console.log("SEND:", data);
    setIsSuccess(true);
    reset();
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setModalType(null);
    setIsSuccess(false);
  };

  const openCustomModal = () => {
    setModalType("custom");
    setIsModalOpen(true);
  };

  const openTrialModal = () => {
    setModalType("trial");
    setIsModalOpen(true);
  };

  const getDescription = () => {
    if (modalType === "custom") {
      return "Свяжитесь с нами чтобы индивидуально подобрать питание";
    }

    if (modalType === "trial") {
      return "Свяжитесь с нами для информации по пробному питанию";
    }

    return "";
  };

  const selectedCaloriesData = calories.find((c) => c.id === selectedCalories);

  const mealsCount = selectedCaloriesData?.mealsCount ?? 0;

  const selectedDurationData = continuity.find(
    (c) => c.id === selectedDuration,
  );

  const daysInWeek = selectedDurationData?.daysInWeek ?? 0;

  const pricePerDay = calculatePrice({
    mealsCount,
    daysInWeek: daysInWeek as 7 | 14 | 21 | 28,
  });

  const totalPrice = pricePerDay * daysInWeek;

  setMealsCount(mealsCount);
  setPricePerDay(pricePerDay);
  setTotalPrice(totalPrice);

  return (
    <>
      <SectionNaming>Калорийность</SectionNaming>

      <RadioWrapper $margin={30}>
        {calories.map(({ id, heading, description, mealsCount, isCustom }) => (
          <RadioBtn
            key={id}
            heading={heading}
            description={description}
            isActive={selectedCalories === id}
            onClick={() => {
              if (isCustom) {
                openCustomModal();
                return;
              }

              setSelectedCalories(id);
              setMealsCount(mealsCount ?? 0);

              const daysInWeek =
                continuity.find((c) => c.id === selectedDuration)?.daysInWeek ??
                0;

              const pricePerDay = calculatePrice({
                daysInWeek: daysInWeek as 7 | 14 | 21 | 28,
                mealsCount: mealsCount ?? 0,
              });

              setPricePerDay(pricePerDay);
              setTotalPrice(pricePerDay * daysInWeek);
            }}
          />
        ))}
      </RadioWrapper>

      <SectionNaming>Продолжительность</SectionNaming>

      <RadioWrapper $margin={40}>
        {continuity.map(({ id, heading, daysInWeek, isTrial }) => {
          const pricePerDay = calculatePrice({
            daysInWeek: daysInWeek as 7 | 14 | 21 | 28,
            mealsCount,
          });

          return (
            <RadioBtn
              key={id}
              heading={heading}
              description={`${pricePerDay} ₽ в день`}
              isActive={selectedDuration === id}
              onClick={() => {
                if (isTrial) {
                  openTrialModal();
                  return;
                }

                setSelectedDuration(id);
                setPricePerDay(pricePerDay);
                setTotalPrice(pricePerDay * (daysInWeek ?? 0));
              }}
            />
          );
        })}
      </RadioWrapper>

      <SharedModal isOpen={isModalOpen} onClose={handleClose}>
        {isSuccess ? (
          <SuccessModal onClose={handleClose} />
        ) : (
          <>
            <ModalTitle>Консультация</ModalTitle>

            <ModalDescription>{getDescription()}</ModalDescription>

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
                Отправить
              </Button>
            </form>
          </>
        )}
      </SharedModal>
    </>
  );
};

export { MealPlanSelector };

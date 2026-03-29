import styled from "styled-components";
import { RadioBtn } from "./RadioBtn";
import { Colors } from "@shared/styles/Colors";
import { Device } from "@shared/styles/media";
import { calories } from "../consts";
import { continuity } from "../consts";
import { calculatePrice } from "../model/calculatePrice";

const SectionNaming = styled.h3`
  color: ${Colors.secondary};
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 10px;

  @media ${Device.Laptop} {
    text-align: start;
    font-size: 20px;
  }
`;

const RadioWrapper = styled.div<{ $margin: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-bottom: ${({ $margin }) => $margin ?? 0}px;
  flex-wrap: wrap;

  @media ${Device.Laptop} {
    flex-wrap: nowrap;
  }
`;

const MealPlanSelector = ({
  selectedCalories,
  setSelectedCalories,
  selectedDuration,
  setSelectedDuration,
  setMealsCount,
  setPricePerDay,
  setTotalPrice,
}: any) => {
  const selectedCaloriesData = calories.find((c) => c.id === selectedCalories);

  const mealsCount = selectedCaloriesData?.mealsCount ?? 0;

  setMealsCount(mealsCount);

  const selectedDurationData = continuity.find(
    (c) => c.id === selectedDuration,
  );
  const daysInWeek = selectedDurationData?.daysInWeek ?? 0;

  const pricePerDay = calculatePrice({
    mealsCount,
    daysInWeek: daysInWeek as 7 | 14 | 21 | 28,
  });
  const totalPrice = pricePerDay * daysInWeek;

  setPricePerDay(pricePerDay);
  setTotalPrice(totalPrice);

  return (
    <>
      <SectionNaming>Калорийность</SectionNaming>
      <RadioWrapper $margin={30}>
        {calories.map(({ id, heading, description, mealsCount }) => (
          <RadioBtn
            key={id}
            heading={heading}
            description={description}
            isActive={selectedCalories === id}
            onClick={() => {
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
        {continuity.map(({ id, heading, daysInWeek }) => {
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
                setSelectedDuration(id);
                setPricePerDay(pricePerDay);
                setTotalPrice(pricePerDay * (daysInWeek ?? 0));
              }}
            />
          );
        })}
      </RadioWrapper>
    </>
  );
};

export { MealPlanSelector };

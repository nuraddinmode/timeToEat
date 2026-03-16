import styled from "styled-components";
import { RadioBtn } from "./RadioBtn";
import { Colors } from "@shared/styles/Colors";
import { Device } from "@shared/styles/media";
import { calories } from "../consts";
import { continuity } from "../consts";

const SectionNaming = styled.h3`
  color: ${Colors.secondary};
  text-align: center;
  font-family: "TT Norms Pro";
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
}: any) => {
  return (
    <>
      <SectionNaming>Калорийность</SectionNaming>
      <RadioWrapper $margin={30}>
        {calories.map(({ id, heading, description }) => (
          <RadioBtn
            key={id}
            heading={heading}
            description={description}
            isActive={selectedCalories === id}
            onClick={() => setSelectedCalories(id)}
          />
        ))}
      </RadioWrapper>
      <SectionNaming>Продолжительность</SectionNaming>
      <RadioWrapper $margin={40}>
        {continuity.map(({ id, heading, description }) => (
          <RadioBtn
            key={id}
            heading={heading}
            description={description}
            isActive={selectedDuration === id}
            onClick={() => setSelectedDuration(id)}
          />
        ))}
      </RadioWrapper>
    </>
  );
};

export { MealPlanSelector };

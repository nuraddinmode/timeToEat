import { useIsMobile } from "@shared/hooks/useIsMobile";
import { titleContent } from "./consts";
import Plate from "@assets/icons/plate.svg?component";
import { RadioBtn } from "./components/RadioBtn";
import styled from "styled-components";
import { Device } from "@shared/styles/media";
import { Colors } from "@shared/styles/Colors";
import { continuity, calories } from "./consts";
import { useState } from "react";
import { SmallRadio } from "@shared/components/SmallRadio";
import { daysOfWeek } from "./consts";
import type { WeekDay } from "./types/index";
import { dishes } from "./consts";

const Root = styled.div`
  @media ${Device.Laptop} {
    background-color: ${Colors.white};
    border-radius: 30px 30px 0 0;
    padding: 30px;
  }
`;

const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;

  @media ${Device.Laptop} {
    flex-direction: row;
    margin-bottom: 30px;
    justify-content: space-between;
  }
`;

const Title = styled.h1`
  color: ${Colors.black};
  font-family: "TT Norms Pro";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: start;

  @media ${Device.Laptop} {
    font-size: 48px;
  }
`;

const SubtitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  ${Device.Laptop} {
    gap: 8px;
  }
`;

const Subtitle = styled.h3`
  color: ${Colors.primary};
  font-family: "TT Norms Pro";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media ${Device.Laptop} {
    font-size: 16px;
  }
`;

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

const ExtraHeading = styled.h2`
  color: ${Colors.black};
  font-family: "TT Norms Pro";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;
  margin-bottom: 10px;

  @media ${Device.Laptop} {
    font-size: 20px;
    text-align: start;
    margin-bottom: 20px;
  }
`;

const ExtraDescription = styled.p`
  color: ${Colors.advertisement};
  text-align: center;
  font-family: "TT Norms Pro";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 20px;

  @media ${Device.Laptop} {
    text-align: start;
  }
`;

const DaysWrapper = styled.div`
  display: flex;
  gap: 30px;
  overflow-x: auto;
  margin-bottom: 30px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Meals = styled.div`
  display: flex;
  overflow-x: auto;
  justify-content: space-between;
  &::-webkit-scrollbar {
    display: none;
  }
  margin-bottom: 20px;

  @media ${Device.Laptop} {
    margin-bottom: 0px;
  }
`;

const Meal = styled.div`
  display: flex;
  min-width: 250px;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  @media ${Device.Laptop} {
    align-items: start;
  }
`;

const MealTime = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

const MealTimeContent = styled.p`
  color: ${Colors.advertisement};
  font-family: "TT Norms Pro";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const MealDescription = styled.p`
  max-width: 270px;
  color: ${Colors.secondary};
  font-family: "TT Norms Pro";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;

  @media ${Device.Laptop} {
    text-align: start;
  }
`;

const Premium = () => {
  const isMobile = useIsMobile();

  const [selectedCalories, setSelectedCalories] = useState<number>(1);
  const [selectedDuration, setSelectedDuration] = useState<number>(3);

  const [selectedDay, setSelectedDay] = useState<WeekDay>("wednesday");

  const currentDishes = dishes[selectedDay];

  const visibleItem = titleContent.find((item) =>
    isMobile ? item.device === "mobile" : item.device === "laptop",
  );

  if (!visibleItem) return null;

  return (
    <Root>
      <HeadingWrapper>
        <Title>{visibleItem.title}</Title>
        <SubtitleWrapper>
          <Plate />
          <Subtitle>Каждый день новое меню</Subtitle>
        </SubtitleWrapper>
      </HeadingWrapper>
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
      <div style={{ display: "flex", gap: "10px" }}>
        <h3>Выберите, сколько дней в неделю вы хотите питаться</h3>
        <div style={{ display: "flex" }}>
          <div>5</div>
          <div>6</div>
          <div>7</div>
        </div>
      </div>
      <ExtraHeading>Пример дневного рациона</ExtraHeading>
      <ExtraDescription>
        6 блюд. Калорийность — 1 235 ккал. Белки — 103 г; жиры — 37 г; углеводы
        — 120 г
      </ExtraDescription>

      <DaysWrapper>
        {daysOfWeek.map(({ id, day, key }) => (
          <SmallRadio
            key={id}
            text={day}
            isActive={selectedDay === key}
            onClick={() => setSelectedDay(key)}
          />
        ))}
      </DaysWrapper>

      <Meals>
        {currentDishes.map(({ id, img, time, portion, name }) => (
          <Meal key={id}>
            <img width="270px" src={img} alt="" />
            <MealTime>
              <MealTimeContent>{time}</MealTimeContent>
              <MealTimeContent>{portion}</MealTimeContent>
            </MealTime>
            <MealDescription>{name}</MealDescription>
          </Meal>
        ))}
      </Meals>
    </Root>
  );
};

export { Premium };

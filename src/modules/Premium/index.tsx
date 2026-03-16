import { Meals } from "./components/Meals";
import { DaysOfWeek } from "./components/DaysOfWeek";
import { MealPlanSelector } from "./components/MealPlanSelector";
import { PremiumFooter } from "./components/PremiumFooter";
import Plate from "@assets/icons/plate.svg?component";
import { ButtonSelectContainer } from "@shared/components/ButtonSelectContainer";
import { ButtonSelect } from "@shared/components/ButtonSelect";
import { useIsMobile } from "@shared/hooks/useIsMobile";
import { titleContent } from "./consts";
import styled from "styled-components";
import { Device } from "@shared/styles/media";
import { Colors } from "@shared/styles/Colors";
import { useMealPlanStore } from "./store";
import { dishes } from "./consts";
import { days } from "./consts";

const Root = styled.div`
  @media ${Device.Tablet} {
    gap: 40px;
  }
  @media ${Device.Laptop} {
    padding-right: 60px;
    padding-left: 60px;
  }
`;

const Wrapper = styled.div`
  padding-right: 20px;
  padding-left: 20px;
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

const NumberOfDays = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;

  @media ${Device.Laptop} {
    margin-bottom: 30px;
  }
`;

const NumberOfDaysTitle = styled.h3`
  max-width: 209px;
  color: ${Colors.secondary};
  font-family: "TT Norms Pro";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Premium = () => {
  const isMobile = useIsMobile();

  const selectedCalories = useMealPlanStore((s) => s.selectedCalories);
  const setSelectedCalories = useMealPlanStore((s) => s.setSelectedCalories);

  const selectedDuration = useMealPlanStore((s) => s.selectedDuration);
  const setSelectedDuration = useMealPlanStore((s) => s.setSelectedDuration);

  const selectedDay = useMealPlanStore((s) => s.selectedDay);
  const setSelectedDay = useMealPlanStore((s) => s.setSelectedDay);

  const selectedDayOfNutrition = useMealPlanStore(
    (s) => s.selectedDayOfNutrition,
  );
  const setSelectedDayOfNutrition = useMealPlanStore(
    (s) => s.setSelectedDayOfNutrition,
  );

  const currentDishes = dishes[selectedDay];

  const visibleItem = titleContent.find((item) =>
    isMobile ? item.device === "mobile" : item.device === "laptop",
  );

  if (!visibleItem) return null;

  return (
    <Root>
      <Wrapper>
        <HeadingWrapper>
          <Title>{visibleItem.title}</Title>
          <SubtitleWrapper>
            <Plate />
            <Subtitle>Каждый день новое меню</Subtitle>
          </SubtitleWrapper>
        </HeadingWrapper>

        <MealPlanSelector
          selectedCalories={selectedCalories}
          setSelectedCalories={setSelectedCalories}
          selectedDuration={selectedDuration}
          setSelectedDuration={setSelectedDuration}
        />

        <NumberOfDays>
          <NumberOfDaysTitle>
            Выберите, сколько дней в неделю вы хотите питаться
          </NumberOfDaysTitle>
          <ButtonSelectContainer border={true}>
            {days.map((day) => (
              <ButtonSelect
                key={day}
                isActive={selectedDayOfNutrition === day}
                onClick={() => setSelectedDayOfNutrition(day)}
              >
                {day}
              </ButtonSelect>
            ))}
          </ButtonSelectContainer>
        </NumberOfDays>
        <ExtraHeading>Пример дневного рациона</ExtraHeading>
        <ExtraDescription>
          6 блюд. Калорийность — 1 235 ккал. Белки — 103 г; жиры — 37 г;
          углеводы — 120 г
        </ExtraDescription>

        <DaysOfWeek selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
        <Meals currentDishes={currentDishes} />
      </Wrapper>
      <PremiumFooter />
    </Root>
  );
};

export { Premium };

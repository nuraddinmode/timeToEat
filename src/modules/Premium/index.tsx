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
import { days } from "./consts";
import { Font } from "@shared/fonts";

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
  ${Font.Text.H1}
  display: flex;
  align-items: start;
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
  font-family: "Roboto", sans-serif;
  ${Font.Text.H5}
`;

const ExtraHeading = styled.h2`
  color: ${Colors.black};
  ${Font.Text.H4}
  text-align: center;
  margin-bottom: 10px;

  @media ${Device.Laptop} {
    text-align: start;
    margin-bottom: 20px;
  }
`;

const ExtraDescription = styled.p`
  color: ${Colors.extra.primary};
  text-align: center;
  ${Font.Text.H6}
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
  ${Font.Text.H6}
`;

const Premium = () => {
  const isMobile = useIsMobile();

  const selectedDayOfNutrition = useMealPlanStore(
    (s) => s.selectedDayOfNutrition,
  );
  const setSelectedDayOfNutrition = useMealPlanStore(
    (s) => s.setSelectedDayOfNutrition,
  );

  const visibleItem = titleContent.find((item) =>
    isMobile ? item.device === "mobile" : item.device === "laptop",
  );

  if (!visibleItem) return null;

  return (
    <Root id="premium">
      <Wrapper>
        <HeadingWrapper>
          <Title>{visibleItem.title}</Title>
          <SubtitleWrapper>
            <Plate />
            <Subtitle>Каждый день новое меню</Subtitle>
          </SubtitleWrapper>
        </HeadingWrapper>

        <MealPlanSelector />

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

        <DaysOfWeek />
        <Meals />
      </Wrapper>
      <PremiumFooter />
    </Root>
  );
};

export { Premium };

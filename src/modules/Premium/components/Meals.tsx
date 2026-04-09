import styled from "styled-components";
import { Device } from "@shared/styles/media";
import { Colors } from "@shared/styles/Colors";
import type { MealTime } from "../types";
import { useMealPlanStore } from "../store";
import { dishes } from "../consts";
import { Font } from "@shared/fonts";

const Root = styled.div`
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
  color: ${Colors.text.comment};
  ${Font.Text.P}
`;

const MealDescription = styled.h5`
  max-width: 270px;
  color: ${Colors.secondary};
  ${Font.Text.H5}
  text-align: center;

  @media ${Device.Laptop} {
    text-align: start;
  }
`;

const Meals = () => {
  const selectedDay = useMealPlanStore((s) => s.selectedDay);
  const currentDishes = dishes[selectedDay];
  return (
    <Root>
      {currentDishes.map(
        ({
          id,
          img,
          time,
          portion,
          name,
        }: {
          id: number;
          img: string;
          time: MealTime;
          portion: string;
          name: string;
        }) => (
          <Meal key={id}>
            <img width="270px" src={img} alt="" />
            <MealTime>
              <MealTimeContent>{time}</MealTimeContent>
              <MealTimeContent>{portion}</MealTimeContent>
            </MealTime>
            <MealDescription>{name}</MealDescription>
          </Meal>
        ),
      )}
    </Root>
  );
};

export { Meals };

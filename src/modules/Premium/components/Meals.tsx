import styled from "styled-components";
import { Device } from "@shared/styles/media";
import { Colors } from "@shared/styles/Colors";

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

const Meals = ({ currentDishes }: any) => {
  return (
    <Root>
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
    </Root>
  );
};

export { Meals };

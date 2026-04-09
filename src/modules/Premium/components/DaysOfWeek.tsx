import styled from "styled-components";
import { SmallRadio } from "@shared/components/SmallRadio";
import { daysOfWeek } from "../consts";
import { useMealPlanStore } from "../store";

const Root = styled.div`
  display: flex;
  gap: 30px;
  overflow-x: auto;
  margin-bottom: 30px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const DaysOfWeek = () => {
  const selectedDay = useMealPlanStore((s) => s.selectedDay);
  const setSelectedDay = useMealPlanStore((s) => s.setSelectedDay);

  return (
    <Root>
      {daysOfWeek.map(({ id, day, key }) => (
        <SmallRadio
          key={id}
          text={day}
          isActive={selectedDay === key}
          onClick={() => setSelectedDay(key)}
        />
      ))}
    </Root>
  );
};

export { DaysOfWeek };

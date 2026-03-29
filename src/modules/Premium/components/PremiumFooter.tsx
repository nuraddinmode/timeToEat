import styled from "styled-components";
import { Colors } from "@shared/styles/Colors";
import { Button } from "@shared/components/Button";
import { Device } from "@shared/styles/media";
import HandOnTable from "@assets/icons/handOnTable.svg?component";
import { useMealPlanStore } from "../store";
import { calories, continuity } from "../consts";
import { OrderModal } from "@shared/UI/Modals/OrderModal";
import { useState } from "react";

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
  color: ${Colors.white};
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

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
  color: ${Colors.white};
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: 20px;
  text-align: center;

  @media ${Device.Laptop} {
    text-align: start;
    font-size: 24px;
  }
`;

const DescriptionTwo = styled.p`
  max-width: 700px;
  color: ${Colors.white};
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;
  max-width: 335px;

  @media ${Device.Laptop} {
    font-size: 16px;
    text-align: start;
  }
`;

const PremiumFooter = ({
  pricePerDay,
  totalPrice,
  selectedCalories,
}: {
  pricePerDay: number;
  totalPrice: number;
  selectedCalories: number;
}) => {
  const selectedDuration = useMealPlanStore((s) => s.selectedDuration);

  const daysInWeek =
    continuity.find((c) => c.id === selectedDuration)?.daysInWeek ?? 0;

  const selectedCaloryHeading =
    calories.find((c) => c.id === selectedCalories)?.heading ?? "";

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Root>
      <Left>
        <Button onClick={() => setIsModalOpen(true)}>
          Заказать {daysInWeek} дней питания за {totalPrice} ₽
        </Button>

        <OrderModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />

        <FooterDescription>
          {selectedCaloryHeading} за {pricePerDay} ₽ в день
        </FooterDescription>
      </Left>
      <HandOnTable />
      <Right>
        <FooterSubtitle>Будем доставлять наборы каждый день.</FooterSubtitle>
        <DescriptionTwo>
          Доставка осуществляется каждый день с 06:00 до 12:00. Выбор интервала
          — 2 часа. Заявки принимаются не позднее, чем за день до предполагаемой
          доставки.
        </DescriptionTwo>
      </Right>
    </Root>
  );
};

export { PremiumFooter };

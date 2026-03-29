import { Colors } from "@shared/styles/Colors";
import styled from "styled-components";
import { PhoneModal } from "@shared/UI/Modals/PhoneModal";
import { useState } from "react";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const Anchor = styled.button`
  color: #4d8f76;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;

const Number = styled.a`
  color: ${Colors.secondary};
  text-align: right;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Time = styled.p`
  color: ${Colors.mutedGray};
  text-align: right;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Contacts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Root>
      <Anchor onClick={() => setIsModalOpen(true)}>Перезвоните мне</Anchor>
      <Number href="tel:+7 988 500-1-700">+7 988 500-1-700</Number>
      <Time>c 09:00 до 21:00</Time>

      <PhoneModal
        title="Заказ обратного звонка"
        description="Введи номер телефона, на который необходимо перезвонить"
        buttonText="Перезвоните мне"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Root>
  );
};

export { Contacts };

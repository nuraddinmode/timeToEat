import styled from "styled-components";
import { DataInput } from "@shared/components/DataInput";
import { Button } from "@shared/components/Button";
import { Colors } from "@shared/styles/Colors";

const Root = styled.div`
  position: fixed;
  background: #756d6d;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1000;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 450px;
  padding: 40px 55px;
  border-radius: 30px;
  background: ${Colors.white};
`;

const Title = styled.h1`
  color: ${Colors.black};
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 32px;
`;

const Description = styled.p`
  color: ${Colors.secondary};
  text-align: center;
  font-family: "TT Norms Pro";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-bottom: 30px;
`;

const OrderModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <Root onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Title>Оформление заказа</Title>
        <Description>
          После отправки формы мы свяжемся с вами для уточнения всех деталей
        </Description>
        <DataInput
          marginBottom="30px"
          type="text"
          placeholder="Ваше имя"
        ></DataInput>
        <DataInput
          marginBottom="30px"
          type="text"
          placeholder="Адрес доставки"
        ></DataInput>
        <DataInput
          marginBottom="30px"
          type="text"
          placeholder="Телефон"
        ></DataInput>
        <Button width="307px">Отправить заказ</Button>
      </Modal>
    </Root>
  );
};

export { OrderModal };

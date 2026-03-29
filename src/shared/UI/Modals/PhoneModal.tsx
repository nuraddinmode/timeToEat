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

const PhoneModal = ({ isOpen, onClose, title, description, buttonText }) => {
  if (!isOpen) return null;
  return (
    <Root onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <DataInput
          marginBottom="30px"
          type="text"
          placeholder="Телефон"
        ></DataInput>
        <Button width="307px">{buttonText}</Button>
      </Modal>
    </Root>
  );
};

export { PhoneModal };

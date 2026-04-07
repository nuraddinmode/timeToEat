import styled from "styled-components";
import { Button } from "@shared/components/Button";
import { SuccessIcon } from "./SuccessIcon";
import { Colors } from "@shared/styles/Colors";
import { Device } from "@shared/styles/media";

const Root = styled.div`
  position: fixed;
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
  max-width: 350px;
  padding: 30px 45px;
  border-radius: 30px;
  background: ${Colors.white};

  @media ${Device.Laptop} {
    max-width: 450px;
    padding: 40px 55px;
  }
`;

const Description = styled.p`
  color: ${Colors.secondary};
  text-align: center;
  font-size: 16px;
  margin-bottom: 40px;
`;

const SubscriptionSuccessModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <Root>
      <Modal>
        <SuccessIcon />
        <Description>Спасибо, ваша подписка оформлена</Description>
        <Button width="307px" onClick={onClose}>
          Закрыть
        </Button>
      </Modal>
    </Root>
  );
};

export { SubscriptionSuccessModal };

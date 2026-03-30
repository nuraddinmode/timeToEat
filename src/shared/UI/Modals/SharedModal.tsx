import styled from "styled-components";
import { Colors } from "@shared/styles/Colors";
import { useEffect } from "react";

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
  max-width: 450px;
  padding: 40px 55px;
  border-radius: 30px;
  background: ${Colors.white};
`;

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

const SharedModal = ({ children, isOpen, onClose }: Props) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Root onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>{children}</Modal>
    </Root>
  );
};

export { SharedModal };

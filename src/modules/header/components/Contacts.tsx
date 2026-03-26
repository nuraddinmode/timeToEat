import { Colors } from "@shared/styles/Colors";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const Anchor = styled.a`
  color: #4d8f76;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Number = styled.h3`
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
  return (
    <Root>
      <Anchor href="tel:+7 988 500-1-700">Перезвоните мне</Anchor>
      <Number>+7 988 500-1-700</Number>
      <Time>c 09:00 до 21:00</Time>
    </Root>
  );
};

export { Contacts };

import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const Anchor = styled.a`
  color: var(--action, #4d8f76);
  font-family: "TT Norms Pro";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
`;

export const Number = styled.h3`
  color: var(--brown, #493e3e);
  text-align: right;
  font-family: "TT Norms Pro";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Time = styled.p`
  color: var(--brown2, #756d6d);
  text-align: right;
  font-family: "TT Norms Pro";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Contacts = () => {
  return (
    <Root>
      <Anchor href="">Перезвоните мне</Anchor>
      <Number>+7 988 500-1-700</Number>
      <Time>c 09:00 до 21:00</Time>
    </Root>
  );
};

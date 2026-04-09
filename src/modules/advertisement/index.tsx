import { content } from "./consts";
import { useIsMobile } from "@shared/hooks/useIsMobile";
import Arrow from "@assets/icons/arrowRight.svg?component";
import styled from "styled-components";
import { Device } from "@shared/styles/media";
import { Colors } from "@shared/styles/Colors";
import { Font } from "@shared/fonts";

const Root = styled.div`
  min-height: 40px;
  background-color: ${Colors.extra.primary};
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media ${Device.Tablet} {
    min-height: 50px;
  }
  @media ${Device.Laptop} {
    min-height: 60px;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media ${Device.Tablet} {
    gap: 15px;
  }
  @media ${Device.Laptop} {
    gap: 20px;
  }
`;

const Description = styled.p`
  ${Font.Text.H5};
  color: ${Colors.white};
`;

const Button = styled.button`
  display: none;

  @media ${Device.Tablet} {
    display: flex;
    gap: 7px;
    align-items: center;
    cursor: pointer;
    color: ${Colors.white};

    ${Font.Text.H5};
    text-decoration-line: underline;
    background: none;
    border: none;
    padding: 0;
  }

  @media ${Device.Laptop} {
    gap: 10px;
    font-size: 24px;
  }
`;

const Advertisement = () => {
  const scrollToPremium = () => {
    const el = document.getElementById("premium");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isMobile = useIsMobile();

  const visibleItem = content.find((item) =>
    isMobile ? item.device === "mobile" : item.device === "laptop",
  );

  if (!visibleItem) return null;

  return (
    <Root>
      <Content>
        {<visibleItem.img />}
        <Description>{visibleItem.text}</Description>
      </Content>
      <Button onClick={scrollToPremium}>
        Заказать
        <Arrow />
      </Button>
    </Root>
  );
};

export { Advertisement };

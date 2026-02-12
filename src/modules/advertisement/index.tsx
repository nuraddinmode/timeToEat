import { content } from "./consts";
import { useIsMobile } from "@shared/hooks/useIsMobile";
import Arrow from "@assets/icons/arrowRight.svg?component";
import styled from "styled-components";
import { Device } from "@shared/styles/media";
import { Colors } from "@shared/styles/Colors";

const Root = styled.div`
  min-height: 40px;
  background-color: ${Colors.advertisement};
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
  color: ${Colors.white};
  font-variant-ligatures: none;
  font-family: "TT Norms Pro";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media ${Device.Tablet} {
    font-size: 15px;
  }
  @media ${Device.Laptop} {
    font-size: 24px;
  }
`;

const Button = styled.button`
  display: none;

  @media ${Device.Tablet} {
    display: flex;
    gap: 7px;
    align-items: center;

    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    color: ${Colors.white};
    font-variant-ligatures: none;
    font-family: "TT Norms Pro";
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  @media ${Device.Laptop} {
    gap: 10px;
    font-size: 24px;
  }
`;

const Advertisement = () => {
  const isMobile = useIsMobile();

  const visibleItem = content.find((item) =>
    isMobile ? item.device === "mobile" : item.device === "desktop",
  );

  if (!visibleItem) return null;

  return (
    <Root>
      <Content>
        {<visibleItem.img />}
        <Description>{visibleItem.text}</Description>
      </Content>
      <Button>
        Заказать
        <Arrow />
      </Button>
    </Root>
  );
};

export { Advertisement };

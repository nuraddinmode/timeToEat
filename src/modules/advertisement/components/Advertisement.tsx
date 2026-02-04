import { content } from "../consts/content";
import { useIsMobile } from "../../../shared/hooks/useIsMobile";
import { Wrapper, Content, Description, Button } from "./Advertisement.styles";
import { arrow } from "../assets";

const Advertisement = () => {
  const isMobile = useIsMobile();

  const visibleItem = content.find((item) =>
    isMobile ? item.device === "mobile" : item.device === "desktop",
  );

  if (!visibleItem) return null;

  return (
    <Wrapper>
      <Content>
        <img src={visibleItem.img} alt="" />
        <Description>{visibleItem.text}</Description>
      </Content>
      <Button>
        Заказать
        <img src={arrow} alt="" />
      </Button>
    </Wrapper>
  );
};

export default Advertisement;

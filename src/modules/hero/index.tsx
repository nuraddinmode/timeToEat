import { useIsMobile } from "../../../shared/hooks/useIsMobile";
import content from "../consts/content";

const Hero = () => {
  const isMobile = useIsMobile();

  const visibleItem = content.find((item) =>
    isMobile ? item.device === "mobile" : item.device === "desktop",
  );

  if (!visibleItem) return null;
  return (
    <div>
      <div>
        <h1>{visibleItem.text}</h1>
        <div>
          <button>Подобрать питание</button>
          <button>Получить консультацию</button>
        </div>
      </div>

      <img src="" alt="" />
    </div>
  );
};

export default Hero;

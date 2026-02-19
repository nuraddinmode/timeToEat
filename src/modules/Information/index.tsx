import { useIsMobile } from "@shared/hooks/useIsMobile";
import { Mobile } from "./components/Mobile";
import { Laptop } from "./components/Laptop";

const Information = () => {
  const isMobile = useIsMobile();
  return <div>{isMobile ? <Mobile /> : <Laptop />}</div>;
};

export { Information };

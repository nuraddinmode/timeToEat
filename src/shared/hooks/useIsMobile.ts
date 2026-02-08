import { useEffect, useState } from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 1440px)").matches,
  );

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1440px)");
    const handler = () => setIsMobile(media.matches);

    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  return isMobile;
};

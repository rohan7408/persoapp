import { useCallback } from "react";

export const useSmoothScroll = (offset = 80) => {
  const scrollToSection = useCallback(
    (elementId) => {
      const element = document.getElementById(elementId);
      if (!element) return;

      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    },
    [offset]
  );

  return scrollToSection;
};

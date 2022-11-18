import { useEffect, useRef } from "react";

const useInfinityScroll = (fetchFunc: () => void) => {
  const $refTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!$refTarget.current) return;

    const infinityScroll = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        fetchFunc();
      }
    });

    infinityScroll.observe($refTarget.current);

    return () => {
      infinityScroll.disconnect();
    };
  }, [fetchFunc]);

  return $refTarget;
};

export default useInfinityScroll;

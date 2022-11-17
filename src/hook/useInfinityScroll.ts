import { useEffect, useRef } from "react";

const useInfinityScroll = (loading: boolean, fetchFunc: () => void) => {
  const $refTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!$refTarget.current || loading) return;

    const infinityScroll = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        fetchFunc();
      }
    });

    infinityScroll.observe($refTarget.current);

    return () => {
      infinityScroll.disconnect();
    };
  }, [fetchFunc, loading]);

  return $refTarget;
};

export default useInfinityScroll;

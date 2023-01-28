import { useState, useEffect, useRef } from "react";

const useRatingStar = (rating: number, totalStars: number) => {
  const [numberOfStars, setNumberOfStars] = useState<Array<number>>([]);
  const ratingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ratingRef.current) return;

    const starsArray = Array.from({ length: totalStars })
      .fill(0)
      .map((_, i) => i + 1);

    ratingRef.current.style.width = starPercentage(rating);
    setNumberOfStars(starsArray);
  }, [rating, totalStars]);

  return { numberOfStars, ratingRef };
};

const starPercentage = (rating: number) => {
  let percentage;
  if (rating <= 5) {
    percentage = (rating / 5) * 100;
  } else {
    percentage = (rating / 10) * 100;
  }

  return `${Math.floor(percentage)}%`;
};

export default useRatingStar;

/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import { SerializedStyles } from "@emotion/react";

import placeHolder from "assets/lazy_loader.gif";

type Props = {
  src: string;
  children: React.ReactNode;
  className: SerializedStyles;
};

const LazyImage = ({ src, children, className }: Props) => {
  const [imageSrc, setImageSrc] = useState(placeHolder);
  const [imageRef, setImageRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    let didCancel = false;

    if (imageRef && imageSrc !== src) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!didCancel && (entry.intersectionRatio > 0 || entry.isIntersecting)) {
              setImageSrc(src);
              observer.unobserve(imageRef);
            }
          });
        },
        {
          threshold: 0.01,
          rootMargin: "75%",
        }
      );
      observer.observe(imageRef);
    }

    return () => {
      didCancel = true;
      if (observer && observer.unobserve && imageRef) {
        observer.unobserve(imageRef);
      }
    };
  }, [src, imageSrc, imageRef]);

  return (
    <div css={className} ref={setImageRef} style={{ backgroundImage: `url(${imageSrc})` }}>
      {children}
    </div>
  );
};

export default LazyImage;

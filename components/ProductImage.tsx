"use client";

import { useState } from "react";

type ProductImageProps = {
  src: string;
  alt: string;
  className: string;
};

export default function ProductImage({
  src,
  alt,
  className,
}: ProductImageProps) {
  const [hasError, setHasError] = useState(false);
  const isGenericPlaceholder = src.includes("placehold");
  return (
    // eslint-disable-next-line @next/next/no-img-element -- product images come from user-provided URLs
    <img
      src={hasError || isGenericPlaceholder ? "/placeholder.png" : src}
      alt={alt}
      loading="lazy"
      className={className}
      onError={() => setHasError(true)}
    />
  );
}

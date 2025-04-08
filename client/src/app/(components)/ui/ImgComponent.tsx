import Image from "next/image";
import React from "react";
import { ImgComponentProps } from "@/utils/types";

const ImgComponent = ({
  alt,
  src,
  width,
  height,
  imgClass,
}: ImgComponentProps) => {
  return (
    <div>
      <Image
        alt={alt}
        src={src}
        width={width}
        height={height}
        className={imgClass}
      />
    </div>
  );
};

export default ImgComponent;

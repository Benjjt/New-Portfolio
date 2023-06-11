import React from "react";
import { animated } from "react-spring";
import Image from "next/image";

const LogoElement = ({
  props,
  image,
  width = 100,
  height = 100,
  xOffset,
  yOffset,
}) => {
  return (
    <animated.div
      style={{
        x: props.x.to((x) => `-${x / xOffset}%`),
        y: props.y.to((y) => `-${y / yOffset}%`),
      }}
      className="relative"
    >
      <Image src={image} width={width} height={height} />
    </animated.div>
  );
};

export default LogoElement;

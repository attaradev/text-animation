import React, { useState, useRef } from "react";

import { classes } from "./AnimatedText.module.css";

export const AnimatedText = ({
  textColor,
  overlayColor,
  children,
  ...props
}) => {
  const containerElement = useRef(null);
  const initialMousePosition = { x: 0, y: 0 };

  const [mousePosition, setMousePosition] = useState(initialMousePosition);

  const handleMouseMove = event => {
    event = event.nativeEvent;
    const element = containerElement.current;
    const newX = (event.offsetX / element.clientWidth) * 100;
    const newY = (event.offsetY / element.clientHeight) * 100;
    const newMousePosition = {
      x: newX,
      y: newY
    };

    setMousePosition(newMousePosition);
  };

  const handleMouseOut = event => setMousePosition(initialMousePosition);

  return (
    <section
      className={classes.AnimatedTextContainer}
      style={{ "--maskX": mousePosition.x, "--maskY": mousePosition.y }}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
      ref={containerElement}
      {...props}
    >
      <h1 style={{ color: textColor }} className={classes.AnimatedTextContent}>
        {children}
      </h1>
      <h1
        style={{ color: overlayColor }}
        className={classes.AnimatedTextContentClone}
      >
        {children}
      </h1>
    </section>
  );
};

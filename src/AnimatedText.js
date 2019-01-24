import React, { useState, useRef } from "react";

import { classes } from "./AnimatedText.module.css";

export const AnimatedText = ({
  textColor,
  overlayColor,
  children,
  ...props
}) => (
  <section className={classes.AnimatedTextContainer} {...props}>
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

import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { AnimatedText } from "./AnimatedText";

const App = () => (
  <div className="App">
    <AnimatedText textColor="#cd122d" overlayColor="#fdc52c">
      MIKE PERRY Y. ATTARA
    </AnimatedText>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

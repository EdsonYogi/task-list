import React, { useState } from "react";
import "./Buttons.css";


export default function Buttons({
  tooltipText,
  buttonText,
  buttonClick,
  buttonClass,
}) {
  let [tooltip, setTooltip] = useState(false);

  return (
    <div className="btn">
      {tooltip ? <span className="tooltipText">{tooltipText}</span> : ""}
      <button
        type="button"
        className={`btn ${buttonClass}`}
        onClick={buttonClick}
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => setTooltip(false)}
      >
        {buttonText}
      </button>
    </div>
  );
}

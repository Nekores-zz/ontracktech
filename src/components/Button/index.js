import React from "react";
import "../../styles/components/button.css";

function Button(props) {
  const { text, icon, variant } = props;
  return (
    <button type="button" className={variant + " btn"}>
      {text}
      {icon}
    </button>
  );
}

export default Button;

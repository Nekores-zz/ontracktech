import React from "react";
import "../../styles/components/button.css";

function Button(props) {
  const { text, icon } = props;
  return (
    <button type="button" class="btn btn-primary">
      {text}
      {icon}
    </button>
  );
}

export default Button;

import React from "react";
import "./Button.scss";

export default function Button(props) {
  return (
    <div>
      <button className="button">{props.children}</button>
    </div>
  );
}

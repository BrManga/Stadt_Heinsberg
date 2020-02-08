import React from "react";
import "./title.styles.scss";
export default function Title({ title }) {
  return (
    <div className="section-title">
      <h4>{title}</h4>
    </div>
  );
}

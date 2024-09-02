import React from "react";
import "./style.scss";
type Props = {};

function Credits({}: Props) {
  return (
    <div className="Credits flex items-center justify-center gap-1">
      <p> made by </p>
      <a href="https://ismylsmylv.com/" target="_blank">
        ismylsmylv
      </a>
    </div>
  );
}

export default Credits;

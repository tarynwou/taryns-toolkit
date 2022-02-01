import React from "react";
import useCollapse from "react-collapsed";
import "./element.css";
function Collapsible(props) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="collapsible">
      <div className="header" {...getToggleProps()}>
        {props.q}
      </div>
      <div {...getCollapseProps()}>
        <div className="content">{props.a}</div>
      </div>
    </div>
  );
}

export default Collapsible;

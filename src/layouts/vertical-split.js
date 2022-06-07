import PropTypes from "prop-types";
import React from "react";
import Split from "react-split";

const VerticalSplitLayout = ({ sizes, children }) => {
  return (
    <Split
      sizes={sizes}
      minSize={90}
      expandToMin={false}
      direction="horizontal"
      cursor="col-resize"
      className="flex"
    >
      {children}
    </Split>
  );
};

VerticalSplitLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default VerticalSplitLayout;

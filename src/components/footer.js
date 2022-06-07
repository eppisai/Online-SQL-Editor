import PropTypes from "prop-types";
import React from "react";

const Footer = ({ Ln, Col }) => {
  return (
    <footer className="text-xs w-full left-0 absolute h-[2.4vh] bg-[#007acc] text-white top-[97.6vh] flex justify-between">
      <span className="ml-2 my-auto font-emibold">{`Ln ${Ln}, Col ${Col}`}</span>
    </footer>
  );
};

Footer.propTypes = {
  Ln: PropTypes.number.isRequired,
  Col: PropTypes.number.isRequired,
};

export default Footer;

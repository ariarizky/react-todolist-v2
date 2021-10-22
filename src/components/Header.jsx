import React from "react";
import Proptypes from "prop-types";

const Header = ({ showAddToggle }) => {
  return (
    <section className="header">
      <button className="header-btn main-black-color" onClick={showAddToggle}>
        Add
      </button>
      <h1 className="header-title">Todo List</h1>
      <button id="clear-btn" className="header-btn main-red-color">
        Clear
      </button>
    </section>
  );
};
Header.propTypes = {
  showAddToggle: Proptypes.func.isRequired
};
export default Header;

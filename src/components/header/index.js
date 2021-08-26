import React from "react";
import "./styles.scss";
import Logo from "../../logo192.png";

const Header = (props) => {
  return (
    <header className="header-component" data-test="header-component">
      <div className="wrap">
        <div className="logo">
          <img
            className="logo-img"
            data-test="logo-img"
            width="60px"
            height="50px"
            src={Logo}
            alt="logo"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

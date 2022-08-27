import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.scss"

function Header() {
  return (
    <>
      <div className="header ">
        <div className="header__wrapper">
          <NavLink to="/numbers">1-100</NavLink>
          <NavLink to="/eyetrain">eye!</NavLink>
        </div>
      </div>
    </>
  )
}

export default Header;
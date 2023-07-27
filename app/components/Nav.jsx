import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import PopupModal from "./PopupModal";

function Nav() {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div className="top-bar sticky">
      <div className="medium-10 large-10 columns small-centered">
        <div className="top-bar-left show-for-large">
          <ul className="menu">
            <li>
              <Link to="/" className="menu-text">
                Typekev
              </Link>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/Experience">Experience</NavLink>
            </li>
            <li>
              <NavLink to="/Company">Company</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div id="menuToggle" className="top-bar-left hide-for-large">
          <input type="checkbox" id="menuCheckbox" />
          <label htmlFor="menuCheckbox">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <ul id="menu" className="menu vertical">
            <li>
              <Link to="/" className="menu-text">
                Typekev
              </Link>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/Experience">Experience</NavLink>
            </li>
            <li>
              <NavLink to="/Company">Company</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right text-right">
          <a>
            <i
              onClick={() => setOpenPopup(true)}
              className="fa fa-bell fa-3x bell"
              aria-hidden="true"
            >
              <div className="notif">!</div>
            </i>
          </a>
        </div>
      </div>
      <PopupModal
        message={"I'm not seeking new opportunities at the moment."}
        open={openPopup}
        onClose={() => setOpenPopup(false)}
      />
    </div>
  );
}

export default Nav;

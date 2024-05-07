import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className="nav-bar">
        <div className="container">
          <input
            type="checkbox"
            name=""
            id="drop-down-cbox"
            checked={isMenuOpen}
            onChange={toggleMenu}
          />
          <label className="drop-down-cbox" htmlFor="drop-down-cbox">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <h1 className="site-logo"> LOGO</h1>
          <ul className={`main-nav ${isMenuOpen ? "open" : ""}`}>
            <li>
              <NavLink to={"/"} onClick={toggleMenu}>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"} onClick={toggleMenu}>
                Explore
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"} onClick={toggleMenu}>
                Book
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"} onClick={toggleMenu}>
                About
              </NavLink>
            </li>
          </ul>


          {/* <div class="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search"/>
      <button type="submit"><i class="fa fa-search"></i></button>
    </form>
  </div> */}

        </div>
      </nav>
    </>
  );
}

export default Navigation;

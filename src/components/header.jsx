import logo from "../assets/logo.svg";
import { navitems } from "./data";
import search from "../assets/search.svg";
import madara from "../assets/pfp.svg";
import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";

const Header = () => {
  const [clicked, setClick] = useState(false);

  const menuClick = () => {
    setClick(!clicked);
  };
  return (
    <div className="header py-[1.5em] px-[2em] lg:px-[5em]">
      <div>
        <img className="header-logo" src={logo} alt="Marvel logo" />
      </div>
      <nav id="nav">
        <ul
          className={`${
            clicked ? "#navbar active" : "#navbar"
          } flex items-center gap-[53px] flex-col-reverse py-[4em] lg:py-0 lg:flex-row absolute top-[5.9em] left-[-60em] lg:left-[0] w-[100%] bg-black-bg lg:bg-inherit lg:top-[0] lg:relative`}
          id="navbar"
        >
          {navitems.map((items) => {
            return (
              <>
                <li>{items.item}</li>
              </>
            );
          })}

          <div className="search-pfp flex-col lg:flex-row">
            <span>
              <img src={search} className="search-icon" alt="search" />
            </span>
            <span>
              <img src={madara} className="pfp" alt="madara-uchiha" />
            </span>
          </div>
        </ul>
      </nav>
      <div className="mobile-menu lg:hidden" onClick={menuClick}>
        <Hamburger />
      </div>
    </div>
  );
};

export default Header;

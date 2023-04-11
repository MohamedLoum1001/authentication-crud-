import React from 'react'
import "./NavBar.scss";

import { AiOutlineSearch } from "react-icons/ai";
import {
  MdLanguage,
  MdChatBubbleOutline,
  MdOutlineDarkMode,
  MdNotificationsNone
} from "react-icons/md";
import { BsFullscreenExit } from "react-icons/bs";
import { TiThListOutline } from "react-icons/ti";
import { DarkModeContext } from "../../Context/DarkModeContext";
import { useContext } from "react";
const NavBar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <AiOutlineSearch />
        </div>
        <div className="items">
          <div className="item">
            <MdLanguage className="icon" />
            English
          </div>
          <div className="item">
            <MdOutlineDarkMode
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <BsFullscreenExit className="icon" />
          </div>
          <div className="item">
            <MdNotificationsNone className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <MdChatBubbleOutline className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <TiThListOutline className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar

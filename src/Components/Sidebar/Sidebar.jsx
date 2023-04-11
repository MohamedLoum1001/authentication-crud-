import React from 'react'
import "./Sidebar.scss";
import {
  MdOutlineDashboard,
  MdPersonOutline,
  MdLocalShipping,
  MdInsertChart,
  MdSettingsApplications,
  MdNotificationsNone,
  MdExitToApp,
  MdSettingsSystemDaydream,
  MdPsychology,
  MdAccountCircle
} from "react-icons/md";
import {
  AiFillCreditCard,
  AiFillAppstore
} from "react-icons/ai"
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../Context/DarkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">lamadmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <MdOutlineDashboard className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <MdPersonOutline className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <AiFillAppstore className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <AiFillCreditCard className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <MdLocalShipping className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <MdInsertChart className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <MdNotificationsNone className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <MdSettingsSystemDaydream className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <MdPsychology className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <MdSettingsApplications className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <MdAccountCircle className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <MdExitToApp className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;

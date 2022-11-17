import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { closeSidebar } from "./Nav";
import { useUserContext } from "../contexts/userContext";

function Sidebar({ writing }) {
  const [open, setOpen] = useState(false);

  const { user } = useUserContext();
  // console.log(user);

  return (
    <div className="sidebar">
      {user ? (
        <ul>
          <div className="aside">
            <Link to="">
              <li className="submenu" onClick={closeSidebar}>
                <div>
                  <FontAwesomeIcon icon="fa-house" className="sidebar-icon" />
                  <span>Home</span>
                </div>
              </li>
            </Link>
            <Link to="/dashboard">
              <li className="submenu" onClick={closeSidebar}>
                <div>
                  <FontAwesomeIcon icon="fa-list" className="sidebar-icon" />
                  <span>Dashboard</span>
                </div>
              </li>
            </Link>
          </div>
        </ul>
      ) : (
        <ul>
          <div className="aside">
            <Link to="">
              <li className="submenu" onClick={closeSidebar}>
                <div>
                  <FontAwesomeIcon icon="fa-house" className="sidebar-icon" />
                  <span>Home</span>
                </div>
              </li>
            </Link>
            {/* <Link to="/">
              <li className="submenu" onClick={closeSidebar}>
                <div>
                  <FontAwesomeIcon icon="fa-list" className="sidebar-icon" />
                  <span>Course & Tuition</span>
                </div>
              </li>
            </Link>
            <Link to="/">
              <li className="submenu" onClick={closeSidebar}>
                <div>
                  <FontAwesomeIcon icon="fa-list" className="sidebar-icon" />
                  <span>Student Login</span>
                </div>
              </li>
            </Link>
            <Link to="/">
              <li className="submenu" onClick={closeSidebar}>
                <div>
                  <FontAwesomeIcon icon="fa-list" className="sidebar-icon" />
                  <span>Contact & FAQ</span>
                </div>
              </li>
            </Link> */}
          </div>
        </ul>
      )}
    </div>
  );
}

export default Sidebar;

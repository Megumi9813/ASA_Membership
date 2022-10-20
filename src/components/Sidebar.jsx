import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { closeSidebar } from "./Nav";

function Sidebar({ writing }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="sidebar">
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
          <li className="submenu">
            <span className="no-click">Writing</span>
          </li>
          {writing.map((writingTask) => {
            return (
              <li
                className="submenu"
                onClick={() => setOpen(!open)}
                key={writingTask.course_title}
              >
                <div className="submenu_title">
                  <div className="submenu_active">
                    <FontAwesomeIcon
                      icon="fa-earth-americas"
                      className="sidebar-icon"
                    />
                    <span>{writingTask.course_title}</span>
                  </div>
                  <FontAwesomeIcon
                    icon="fa-angle-down"
                    className={
                      open
                        ? "submenu-icon submenu-down close"
                        : "submenu-icon submenu-down"
                    }
                  />
                  <FontAwesomeIcon
                    icon="fa-angle-up"
                    className={
                      open
                        ? "submenu-icon submenu-up open"
                        : "submenu-icon submenu-up"
                    }
                  />
                </div>
                <ul className={open ? "submenu-option open" : "submenu-option"}>
                  <li>
                    {writingTask.classes.map((data) => (
                      <div className="lesson_wrapper" key={data.id}>
                        {data.writing_type === "Task 1" && (
                          <>
                            <div className="lessons_type">Task 1: Email</div>
                            <ul>
                              <Link
                                to={data.path}
                                key={data.title}
                                onClick={closeSidebar}
                              >
                                <li className="lesson_title">
                                  {data.writing_type === "Task 1" && data.title}
                                </li>
                              </Link>
                            </ul>
                          </>
                        )}
                        {data.writing_type === "Task 2" && (
                          <>
                            <div className="lessons_type">
                              Task 2: Survey Questions
                            </div>
                            <ul>
                              <Link
                                to={data.path}
                                key={data.title}
                                onClick={closeSidebar}
                              >
                                <li className="lesson_title">
                                  {data.writing_type === "Task 2" && data.title}
                                </li>
                              </Link>
                            </ul>
                          </>
                        )}
                      </div>
                    ))}
                  </li>
                </ul>
              </li>
            );
          })}
        </div>
      </ul>
    </div>
  );
}

export default Sidebar;

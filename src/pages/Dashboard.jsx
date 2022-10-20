import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Dashboard({ userAnswer, writing }) {
  return (
    <div className="container">
      <div className="dashboard">
        <div className="progress_wrapper">
          <div className="progressbar"></div>
          <FontAwesomeIcon icon="fa-trophy" />
        </div>
        <div className="dashboard_details">
          <h4 className="dashboard_details-title">Dashboard</h4>
          <div className="dashboard_detail">
            <FontAwesomeIcon icon="fa-earth-americas" />
            <p className="dashboard_details-para">0 lessons completed</p>
          </div>
          <div className="dashboard_detail">
            <FontAwesomeIcon icon="fa-cart-shopping" />
            <p className="dashboard_details-para">3 lessons purchased</p>
          </div>
        </div>
      </div>
      <div className="course_content">
        <div className="lesson">
          {writing.map((item) => (
            <div className="card" key={item.course_title}>
              <div className="card_title-wrapper">
                <div className="card_title-wrapper">
                  <h2>{item.course_title}</h2>
                  <p>{item.dashboard_comments}</p>
                </div>
              </div>
              <div className="card_contents-wrapper">
                {item.classes.map((data) => (
                  <div className="card_content-wrapper" key={data.id}>
                    <h3>{data.writing_type}</h3>
                    <ul className="course-lessons">
                      <li className="course-lesson">
                        <button>
                          <FontAwesomeIcon icon="fa-pen-to-square" />
                        </button>
                        <Link to={data.path}>
                          <p>{data.title}</p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {console.log(writing)}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

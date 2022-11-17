import React from "react";
import './courseItem.scss';
import { useUserContext } from '../../contexts/userContext';

function CourseItem({ course }) {
  const { user } = useUserContext();

  return (
    <div className="courseItem">
      {/* <li className="card_item">
        <div className="item-title">{course.title}</div>
        {course.listOfFeatures && (
          <ul>
            {course.listOfFeatures.map((feature) => (
              <li className="course-feature" key={feature}>
                {feature}
              </li>
            ))}
          </ul>
        )}
        <div className="enroll-btn">
          <button>Enroll Today</button>
        </div>
      </li> */}
    </div>
  );
}

export default CourseItem;

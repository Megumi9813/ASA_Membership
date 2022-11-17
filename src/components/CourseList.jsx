import React, { useState, useEffect } from "react";
import CourseItem from './course item/CourseItem'
import { collection, getDocs, doc } from "firebase/firestore";
import { db } from "../firebase";

function CourseList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "courses"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        // console.log(list);
        setData(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  // console.log(data);

  return (
    <div className="courseList">
      <div className="row">
        <div className="course-wrapper">
          <ul className="card-list">
            {data?.map((course) => (
              <CourseItem key={course.id} course={course} />
            ))}
            {/* {courses?.map((course) => (
              <CourseItem key={course.id} />
            ))} */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CourseList;

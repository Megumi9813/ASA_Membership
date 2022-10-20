import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUserContext } from "../contexts/userContext";
import { useLocation } from "react-router-dom";
import WrtitingClass from "../components/WrtitingClass";

function Writing({ writing, userAnswer }) {
  const { user, setAuthCondition } = useUserContext();
  const location = useLocation();

  return (
    <>
      {user ? (
        <>
          {writing.map((writingTask) =>
            writingTask.classes
              .filter(
                (writingAnswer) => location.pathname === writingAnswer.path
              )
              .map((writingAnswer) => (
                <div className="classRoom_container" key={writingAnswer.title}>
                  <WrtitingClass
                    writingAnswer={writingAnswer}
                    userAnswer={userAnswer}
                  />
                </div>
              ))
          )}
        </>
      ) : (
        <>
          <div className="classRoom_container noUser">
            <div className="unLock-wall">
              <FontAwesomeIcon icon="fa-lock" />
              <h2>Unlock this lesson</h2>
              <p className="unLock-wall_para">
                Log into your account to take this lesson!
              </p>
              <div>
                <button
                  className="btn onLock-btn"
                  onClick={() =>
                    setAuthCondition((prevState) => ({
                      ...prevState,
                      signIn: true,
                    }))
                  }
                >
                  Login
                </button>
                <button
                  className="btn"
                  onClick={() =>
                    setAuthCondition((prevState) => ({
                      ...prevState,
                      signUp: true,
                    }))
                  }
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Writing;

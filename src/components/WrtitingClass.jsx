import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WritingForm from "../components/WritingForm";

function WrtitingClass({ writingAnswer, userAnswer }) {
  return (
    <>
      <div className="classRoom_header">
        {writingAnswer.writing_type === "Task1" ? (
          <h2>Writing Task 1: Writing an Email</h2>
        ) : (
          <h2>Writing Task 2: Responding to Survey Questions</h2>
        )}
        <div className="timer">
          <p>TIme remaining: 00 minutes 00 seconds</p>
        </div>
      </div>
      <div className="classRoom_body">
        <div className="writing_question-left">
          <div className="question_intro">
            <FontAwesomeIcon icon="fa-circle-exclamation" />
            Read the following information.
          </div>
          <div className="question">
            {writingAnswer.writingLeft.map((question) => question)}
          </div>
        </div>
        <div className="writing_question-right">
          <div className="question_intro">
            <FontAwesomeIcon icon="fa-circle-exclamation" />
            {writingAnswer.writingRight.map((question) => question)}
          </div>
          {writingAnswer.Task && (
            <ul className="task">
              {writingAnswer.Task.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          )}
          {writingAnswer.opinion && (
            <ul className="task">
              {writingAnswer.opinion.map((opinion) => (
                <li key={opinion}>{opinion}</li>
              ))}
            </ul>
          )}
          <WritingForm writingAnswer={writingAnswer} userAnswer={userAnswer} />
        </div>
      </div>
    </>
  );
}

export default WrtitingClass;

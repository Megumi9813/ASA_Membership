import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useUserContext } from "../contexts/userContext";

function WritingForm({ writingAnswer, userAnswer }) {
  const { user } = useUserContext();
  const [answer, setAnswer] = useState("");
  const submittedUser = userAnswer.map((data) => data.uid);
  // console.log(userAnswer);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const answerSubmitHandler = async () => {
    const collectionRef = collection(db, "answers");
    const payload = { uid: user.uid, value: answer, classId: writingAnswer.id };
    const docRef = await addDoc(collectionRef, payload);
    console.log("The new ID is: " + docRef.id);
  };

  return (
    <form onSubmit={onSubmit}>
      {submittedUser.includes(user.uid) ? (
        <>
          {userAnswer
            .filter((data) => data.classId === writingAnswer.id)
            .map((data) => (
              <textarea key={data.classId} value={data.value} readOnly>
                {data.value}
              </textarea>
            ))}
          <div className="writing_submit-btn">
            <button className="submittedAnswer_btn">Submitted</button>
          </div>
        </>
      ) : (
        <>
          <textarea
            type="text"
            required
            onChange={(e) => setAnswer(e.target.value)}
            value={answer}
          />
          <div className="writing_submit-btn">
            <button onClick={answerSubmitHandler}>Submit</button>
          </div>
        </>
      )}
    </form>
  );
}

export default WritingForm;

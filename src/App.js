import React, { useEffect, useState } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import Home from "./pages/Home";
import Signin from "./components/Account/Signin";
import Signup from "./components/Account/Signup";
import ForgotPW from "./components/Account/ForgotPW";
import Writing from "./pages/Writing";
import Dashboard from "./pages/Dashboard";

function App() {
  const [writing, setWriting] = useState([]);
  const [userAnswer, setUserAnswer] = useState([]);

  useEffect(() => {
    const writingsCollectionRef = collection(db, "writing");
    const answersCollectionRef = collection(db, "answers");
    const getFirestoreDatabase = async () => {
      const writingData = await getDocs(writingsCollectionRef);
      const userAnswerData = await getDocs(answersCollectionRef);
      setWriting(
        writingData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      setUserAnswer(
        userAnswerData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getFirestoreDatabase();
  }, []);

  return (
    <div className="App">
      <Nav />
      <Signin />
      <Signup />
      <ForgotPW />
      <main className="course_main">
        <aside className="sidebar_wrapper">
          <Sidebar writing={writing} />
        </aside>
        <div className="course_wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/dashboard"
              element={<Dashboard userAnswer={userAnswer} writing={writing} />}
            />
            <Route
              path="/writing/celpip01"
              element={<Writing writing={writing} userAnswer={userAnswer} />}
            />
            <Route
              path="/writing/celpip02"
              element={<Writing writing={writing} userAnswer={userAnswer} />}
            />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;

import { useState, useCallback, useRef } from "react";
import { Questions } from "./Questions.jsx";
import Summary from "./Summary.jsx";

import Allquestion from "./Allquestion.jsx";
import quizcompleteimg from "../assets/quiz-complete.png";
export default function Quiz() {
  const [u, su] = useState([]);
  // const [a, sa] = useState("");
  // const activeindex = a === "" ? u.length : u.length - 1;

  // if (Questions.length === 0) {
  //    return <div>No questions availacble!</div>;
  //  }

  // const handleanswer = useCallback(
  //   function handleanswer(selectedans) {
  //   sa("answered");
  //   su((prevans) => {
  //     return [...prevans, selectedans];
  //    });
  //   setTimeout(() => {
  //    if (selectedans === Questions[activeindex].answers[0]) {
  //     sa("correct");
  //   } else {
  ///    sa("wrong");
  //  }

  // setTimeout(() => {
  //   sa("");
  //  }, 2000);
  // }, 1000);
  // },
  //  [activeindex]
  // );
  // const handleskipanswer = useCallback(
  //   () => handleanswer(null),
  //   [handleanswer]
  // );
  const activeindex = u.length;

  if (Questions.length === 0) {
    return <div>No questions availacble!</div>;
  }

  const handleanswer = useCallback(function handleanswer(selectedans) {
    su((prevans) => {
      return [...prevans, selectedans];
    });
  }, []);
  const handleskipanswer = useCallback(
    () => handleanswer(null),
    [handleanswer]
  );

  if (Questions.length === u.length) {
    return <Summary useranswer={u} />;
  }

  return (
    <div id="question">
      <Allquestion
        key={activeindex}
        index={activeindex}
        OnskipAnswer={handleskipanswer}
        OnselectAnswer={handleanswer}
      />
    </div>
  );
}

import Questiontimer from "./Questiontimer.jsx";
import Answer from "./Answer.jsx";
import { useState } from "react";
import { Questions } from "./Questions.jsx";

export default function Allquestion({ OnselectAnswer, OnskipAnswer, index }) {
  const [activeans, setselectans] = useState({
    selectans: "",
    iscorrect: null,
  });
  let timer = 10000;
  if (activeans.selectans) {
    timer = 10000;
  }
  if (activeans.iscorrect != null) {
    timer = 3000;
  }
  function handleanswers(ans) {
    setselectans({
      selectans: ans,
      iscorrect: null,
    });
    setTimeout(() => {
      setselectans({
        selectans: ans,
        iscorrect: Questions[index].answers[0] === ans,
      });
      setTimeout(() => {
        OnselectAnswer(ans);
      }, 2000);
    }, 1000);
  }
  let a = " ";
  if (activeans.selectans && activeans.iscorrect != null) {
    a = activeans.iscorrect ? "correct" : "wrong";
  } else if (activeans.selectans) {
    a = "answered";
  }
  return (
    <div id="question">
      <Questiontimer
        key={index}
        timeout={timer}
        mode={a}
        onTimeout={a === "" ? OnskipAnswer : null}
      />
      <h1>{Questions[index].text}</h1>
      <Answer
        answers={Questions[index].answers}
        a={a}
        selectedans={activeans.selectans}
        Onselect={handleanswers}
      />
    </div>
  );
}

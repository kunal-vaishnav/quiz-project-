import { Questions } from "./Questions";
import quizcompleteimg from "../assets/quiz-complete.png";

export default function Summary({ useranswer }) {
  const Skippedansanswers = useranswer.filter((ans) => ans === null);
  const wronganswer = useranswer.filter(
    (ans, index) => ans === Questions[index].answers[0]
  );

  const Skippedans = Math.round(
    (Skippedansanswers.length / useranswer.length) * 100
  );
  const rightans = Math.round((wronganswer.length / useranswer.length) * 100);
  const wrongans = 100 - Skippedans - rightans;
  return (
    <div id="summary">
      <img src={quizcompleteimg} alt="quizcompletetrophy" />
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{Skippedans}%</span>
          <span className="text">Skipped </span>
        </p>
        <p>
          <span className="number">{rightans}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongans}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {useranswer.map((ans, index) => {
          let cssclass = "user-answer";
          if (ans === null) {
            cssclass += "Skipped";
          } else if (ans === Questions[index].answers[0]) {
            cssclass += "right";
          } else {
            cssclass += "wrong";
          }
          return (
            <li key={ans}>
              <h3>{index + 1}</h3>
              <p className="question">{Questions[index].text}</p>
              <p className="cssclass">{ans ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

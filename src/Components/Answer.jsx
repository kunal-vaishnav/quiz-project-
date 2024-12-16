import { useRef } from "react";

export default function Answer({ answers, a, selectedans, Onselect }) {
  const shuffledanswer = useRef();
  if (!shuffledanswer.current) {
    shuffledanswer.current = [...answers];
    shuffledanswer.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledanswer.current.map((ans) => {
        const selectedanswer = selectedans === ans;
        let cssclass = "";
        if (a === "answered" && selectedanswer) {
          cssclass = "selected";
        } else if ((a === "correct" || a === "wrong") && selectedanswer) {
          cssclass = a;
        }

        return (
          <li key={ans} className="answer">
            <button
              onClick={() => Onselect(ans)}
              className={cssclass}
              disabled={a !== " "}
            >
              {ans}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

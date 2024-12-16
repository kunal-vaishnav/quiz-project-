import { useEffect, useState } from "react";

export default function Questiontimer({ timeout, onTimeout, a, mode }) {
  const [t, st] = useState(timeout);
  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      st((prevtime) => prevtime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <progress id="question-time" max={timeout} value={t} className={mode} />
  );
}

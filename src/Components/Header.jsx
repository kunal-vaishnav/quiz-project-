import logoimg from "../assets/quiz-logo.png";
export default function Header() {
  return (
    <div>
      <header>
        <img src={logoimg} alt={"React image"} />
        <h1>React quiz</h1>
      </header>
    </div>
  );
}

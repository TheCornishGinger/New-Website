import "./aboutMeApp.scss";

let css = "aboutMeApp ";

export function AboutMe() {
  return (
    <div className={css + "wrap"}>
      <div className="margin-auto">
        <h1 className="text large">About me</h1>
        <p className="text medium">Welcome to my website!</p>
        <br />
        <p className="text small">Created by Levi Wrigley.</p>
      </div>
    </div>
  );
}

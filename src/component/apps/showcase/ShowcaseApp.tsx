import "./ShowcaseApp.scss";

export function ShowcaseApp() {
  return (
    <div
      className="flex"
      style={{ height: "100vh", flexDirection: "column", overflow: "hidden" }}
    >
      <div className="margin-auto">
        <p className="showcase-bear">ʕ•ᴥ•ʔ</p>
        <p className="text medium" style={{ color: "white", textAlign: "center" }}>
          I'm showcase bear!
        </p>
        <p className="text small">There's nothing here... how embearassing!</p>
        <p className="text small">
          When Levi get's his bearings I'll show a game here.
        </p>
      </div>
    </div>
  );
}

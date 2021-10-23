import logo from "../../resource/image/logo.gif";

export function Home() {
  return (
    <>
      <p className="text large">The home of</p>
      <img className="image" src={logo} alt="TCG Games Logo" />
      <p className="text medium">
        This is my personal site where I like to host a whole load of random ass
        stuff. I trust you will enjoy searching through my unfinished, unpolished and
        mostly useless creations!
      </p>
    </>
  );
}

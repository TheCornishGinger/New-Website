import logo from "../../resource/image/logo.gif";
import { Window } from "../../component/window/Window";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

export function Home() {
  let renderWindow = () => {
    console.log("render window");
    let height;
    if (window.innerWidth < 900) {
      height = window.innerHeight / 3;
    } else {
      height = window.innerWidth / 4;
    }
    const element = (
      <Window
        title="Showcase"
        src="/apps/showcase"
        fixedPlace={true}
        size={[0, height]}
      />
    );
    ReactDOM.render(element, document.getElementsByClassName("window-wrap")[0]);
  };

  return (
    <>
      <div className="page-wrap" style={{}} onLoad={renderWindow}>
        <div className="home-wrap-inner">
          <div className="screen-left-wrap">
            <p className="text large title-text">The home of</p>
            <img className="title-img" src={logo} alt="TCG Games Logo" />
          </div>
          <div className="margin-auto" style={{ flex: 1 }}>
            <div className="window-wrap">
              <p>Loading window...</p>
            </div>
            <p className="text medium home-desc">
              My name's Levi and this is my personal site, I host a whole load of
              random ass stuff and I trust you'll enjoy searching through my
              unfinished, unpolished and mostly useless creations.{" "}
              <Link to="/about" style={{ textDecoration: "none" }}>
                Find out more
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

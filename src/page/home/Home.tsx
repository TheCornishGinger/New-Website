import logo from "../../resource/image/logo.gif";
import loader from "../../resource/image/loader.gif";
import { Window } from "../../component/window/Window";
import ReactDOM from "react-dom";
//import { Link } from "react-router-dom";

export function Home() {
  let renderWindow = () => {
    let height;
    if (window.innerWidth < 900) {
      height = window.innerHeight / 3;
    } else if (window.innerWidth > 1300) {
      height = 400;
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

  let addAboutWindow = () => {
    const element = (
      <Window
        title="About me"
        src="/apps/about-me"
        size={[window.innerWidth / 2, window.innerHeight / 1.5]}
      />
    );
    ReactDOM.render(element, document.getElementById("about-window"));
  };

  return (
    <>
      <div className="page-wrap" style={{}} onLoad={renderWindow}>
        <div className="home-wrap-inner">
          <div className="screen-left-wrap">
            <p className="text large title-text">The home of</p>
            <img className="title-img" src={logo} alt="TCG Games Logo" />
          </div>
          <div className="screen-right-wrap">
            <div className="window-wrap">
              <p className="window-load-text">
                Loading window
                <img
                  src={loader}
                  alt="Loader"
                  style={{
                    imageRendering: "pixelated",
                    width: "40%",
                    margin: "auto",
                    opacity: 0.5,
                  }}
                />
              </p>
            </div>
            <p className="text medium home-desc">
              My name's Levi and this is my personal site, I host a whole load of
              random ass stuff and I trust you'll enjoy searching through my
              unfinished, unpolished and mostly useless creations.{" "}
              {/* <Link to="/about" style={{ textDecoration: "none" }}></Link> */}
              <span style={{ color: "#0b7fb7" }} onClick={addAboutWindow}>
                Find out more
              </span>
            </p>
          </div>
        </div>
      </div>
      <div id="about-window"></div>
    </>
  );
}

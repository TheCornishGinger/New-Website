import logo from "../../resource/image/logo.gif";
import { Window } from "../../component/window/Window";
import ReactDOM from "react-dom";

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
              This is my personal site where I like to host a whole load of random
              ass stuff. I trust you will enjoy searching through my unfinished,
              unpolished and mostly useless creations!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

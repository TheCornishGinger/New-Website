import logo from "../../resource/image/logo.gif";
import { Window } from "../../component/window/Window";

export function Home() {
  return (
    <>
      <div className="page-wrap">
        <div className="margin-auto flex">
          <div className="screen-left-wrap">
            <p className="text large title-text">The home of</p>
            <img className="title-img" src={logo} alt="TCG Games Logo" />
          </div>
          <div className="margin-auto" style={{ flex: 1 }}>
            <div className="window-wrap">
              <Window
                title="Showcase"
                src="/apps/showcase"
                fixedPlace={true}
                size={[0, window.innerWidth / 5]}
              />
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

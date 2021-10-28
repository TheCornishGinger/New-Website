import { Window } from "../../component/window/Window";

export function AboutMe() {
  return (
    <div className="page-wrap">
      <Window
        title="About me"
        src="/apps/about-me"
        size={[window.innerWidth / 2, window.innerHeight / 1.5]}
      />
    </div>
  );
}

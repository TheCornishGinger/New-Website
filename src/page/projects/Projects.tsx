import { ShowcaseBlock } from "../../component/showcase-block/ShowcaseBlock";
import { ShowcaseItem } from "../../component/showcase-block/ShowcaseItem";
import "./Projects.scss";

export function Projects() {
  const showcaseList: ShowcaseItem[] = [
    {
      title: "Minecraft Server",
      description:
        "My latest project, a minecraft server running on my own custom plugin. " +
        "Featuring dynamic lobbies, original maps and games and no grindable or payable bonuses, Fair gaming for all players!",
      button: "Join Now",
      link: "server",
    },
  ];

  return (
    <>
      <h1 className="projects-title text large" style={{}}>
        Projects
      </h1>
      <ShowcaseBlock items={showcaseList} />
    </>
  );
}

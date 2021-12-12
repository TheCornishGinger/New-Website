import { getThemeLight, getThemeMedium } from "../../globalFunctions";
import "./showcaseBlock.scss";
import { ShowcaseItem } from "./ShowcaseItem";

type ShowcaseProps = {
  items: Array<ShowcaseItem>;
};

export function ShowcaseBlock({ items }: ShowcaseProps) {
  var result = new Array<JSX.Element>();

  function mouseClick(title: string) {
    items.forEach((item) => {
      if (item.title === title && item.link !== undefined) {
        window.location.href = item.link;
      }
    });
  }

  var i = 0;
  items.forEach((item) => {
    var bgColor = getThemeMedium();
    var button;
    if (i % 2 === 0) {
      bgColor = getThemeLight();
    }
    if (item.button !== undefined) {
      button = (
        <>
          <div className="showcase-button" onClick={() => mouseClick(item.title)}>
            {item.button}
          </div>
        </>
      );
    } else {
      button = <></>;
    }

    const element = (
      <div
        key={item.title}
        className="showcase-item"
        style={{ borderColor: bgColor }}
      >
        <div className="showcase-body">
          <p
            className="showcase-title"
            style={{ borderColor: bgColor, backgroundColor: bgColor }}
          >
            {item.title}
          </p>
          <p className="showcase-description">{item.description}</p>
          <div>{button}</div>
        </div>
      </div>
    );
    result.push(element);
    i++;
  });

  return <div className="showcase-block">{result}</div>;
}

import "./browserApp.scss";

let css = "browserApp ";
let searchBarHeight = 50;

export function BrowserApp() {
  return (
    <>
      <div className={css + "bar-top"} style={{ height: searchBarHeight }}>
        <div className={css + "bar-content-wrap"}>
          <p className={css + "prefixText"}>http://</p>
          <input className={css + "searchBar"} type="text" />
        </div>
      </div>
      <iframe
        title="BrowserPage"
        className={css + "frame"}
        style={{ height: window.innerHeight - searchBarHeight * 2 }}
      ></iframe>
      <div className={css + "bar-bottom"}></div>
    </>
  );
}

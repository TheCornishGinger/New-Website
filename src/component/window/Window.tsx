import { useEffect, useState } from "react";
import "./Window.scss";

export function Window() {
  let videoList = ["izGwDsrQ1eQ", "dQw4w9WgXcQ", "y6120QOlsfU", "L_jWHffIx5E", "k85mRPqvMbE", "ZcJjMnHoIBI"];
  let [randomVideo, setRandomVideo] = useState<string>();

  let [controlBarSize, setControlBarSize] = useState<number>(22);
  let [controlBarBorder, setControlBarBorder] = useState<number>(0);
  let [windowDrag, setWindowDrag] = useState<boolean>(false);
  let [windowResize, setWindowResize] = useState<boolean>(false);
  let [windowFullscreen, setWindowFullscreen] = useState<boolean>(false);
  let [windowSize, setWindowSize] = useState<number[]>([
    window.innerWidth / 2,
    window.innerHeight / 2,
  ]);
  let [windowPos, setWindowPos] = useState<number[]>([
    window.innerWidth / 2 - windowSize[0] / 2,
    window.innerHeight / 2 - windowSize[1] / 2,
  ]);
  let [oldWindowSize, setOldWindowSize] = useState<number[]>([0, 0]);
  let [oldWindowPos, setOldWindowPos] = useState<number[]>([0, 0]);
  let [cursorIcon, setCursorIcon] = useState<string>("default");
  let [windowDisplay, setWindowDisplay] = useState<string>("block");
  let [windowBodyDisplay, setWindowBodyDisplay] = useState<string>("block");
  let [windowContentDisplay, setWindowContentDisplay] = useState<string>("block");
  let [closeIconDisplay, setCloseIconDisplay] = useState<string>("none");
  let [minIconDisplay, setMinIconDisplay] = useState<string>("none");
  let [maxIconDisplay, setMaxIconDisplay] = useState<string>("none");
  let [windowTitle, setWindowTitle] = useState<string>("Window");
  let [windowDragOffset, setWindowDragOffset] = useState<number[]>([0, 0]);
  let [maxBtnText, setMaxBtnText] = useState<string>("<>");

  // ANIMATION
  let btnAnimTime = 150;
  let [closeBtnAnim, setCloseBtnAnim] = useState<string>();
  let [closeBtnTextAnim, setCloseBtnTextAnim] = useState<string>();
  let [minBtnAnim, setMinBtnAnim] = useState<string>();
  let [minBtnTextAnim, setMinBtnTextAnim] = useState<string>();
  let [maxBtnAnim, setMaxBtnAnim] = useState<string>();
  let [maxBtnTextAnim, setMaxBtnTextAnim] = useState<string>();

  useEffect(() => {
    let mouseMove = (e: MouseEvent) => {
      if (windowDrag) {
        setCursorIcon("grabbing");
        setWindowPos([e.pageX - windowDragOffset[0], e.pageY - windowDragOffset[1]]);
      }
    };
    document.addEventListener("mousemove", mouseMove);
    return () => {
      document.removeEventListener("mousemove", mouseMove);
    };
  }, [windowDrag, windowDragOffset]);

  useEffect(() => {
    let mouseDown = (e: MouseEvent) => {
      if (!windowFullscreen) {
        setWindowDragOffset([e.x - windowPos[0], e.y - windowPos[1]]);
      }
    };
    document.addEventListener("mousedown", mouseDown);
    return () => {
      document.removeEventListener("mousedown", mouseDown);
    };
  }, [windowPos, windowFullscreen]);

  useEffect(() => {
    let mouseUp = () => {
      setCursorIcon("default");
      setWindowDrag(false);
      setWindowResize(false);
      setWindowContentDisplay("block");
    };
    document.addEventListener("mouseup", mouseUp);
    return () => {
      document.removeEventListener("mouseup", mouseUp);
    };
  }, [windowDrag]);

  let enableDrag = () => {
    if (!windowResize) {
      if (windowFullscreen) {
        setWindowSize(oldWindowSize);
        setWindowFullscreen(false);
      }
      setWindowContentDisplay("none");
      setCursorIcon("grabbing");
      setWindowDrag(true);
    }
  };

  let enableResizeH = () => {
    setWindowResize(true);
  };

  // CLOSE BUTTON
  let closeWindow = () => {
    if (!windowDrag) {
      setWindowDisplay("none");
    }
  };
  let enterCloseBtn = () => {
    setCloseBtnAnim("btnEnter");
    setCloseBtnTextAnim("textEnter");
    setCloseIconDisplay("block");
  };
  let leaveCloseBtn = () => {
    setCloseBtnAnim("btnLeave");
    setCloseBtnTextAnim("textLeave");
    setTimeout(() => {
      setCloseIconDisplay("none");
    }, btnAnimTime);
  };

  // MIN BUTTON
  let minWindow = () => {
    if (!windowDrag) {
      if (windowBodyDisplay === "none") {
        setWindowBodyDisplay("block");
        setControlBarBorder(0);
      } else {
        setWindowBodyDisplay("none");
        setControlBarBorder(5);
      }
    }
  };
  let enterMinBtn = () => {
    setMinBtnAnim("btnEnter");
    setMinBtnTextAnim("textEnter");
    setMinIconDisplay("block");
  };
  let leaveMinBtn = () => {
    setMinBtnAnim("btnLeave");
    setMinBtnTextAnim("textLeave");
    setTimeout(() => {
      setMinIconDisplay("none");
    }, btnAnimTime);
  };

  // MAX BUTTON
  let maxWindow = () => {
    if (!windowDrag) {
      if (windowFullscreen) {
        setWindowSize(oldWindowSize);
        setWindowPos(oldWindowPos);
        setMaxBtnText("<>");
      } else {
        setOldWindowPos(windowPos);
        setWindowPos([0, 0]);
        setOldWindowSize(windowSize);
        setWindowSize([window.innerWidth, window.innerHeight]);
        setMaxBtnText("><");
      }
      setWindowFullscreen(!windowFullscreen);
    }
  };
  let enterMaxBtn = () => {
    setMaxBtnAnim("btnEnter");
    setMaxBtnTextAnim("textEnter");
    setMaxIconDisplay("block");
  };
  let leaveMaxBtn = () => {
    setMaxBtnAnim("btnLeave");
    setMaxBtnTextAnim("textLeave");
    setTimeout(() => {
      setMaxIconDisplay("none");
    }, btnAnimTime);
  };

  // CURSOR
  let setCursorResizeW = () => {
    setCursorIcon("e-resize");
  };
  let setCursorResizeH = () => {
    setCursorIcon("n-resize");
  };
  let setCursorNormal = () => {
    setCursorIcon("default");
  };

  let windowInit = () => {
    setWindowTitle(windowTitle);
    setControlBarSize(22);
  };

  let getRandomVideo = () => {
    if (!randomVideo) {
      setRandomVideo(videoList[Math.floor(Math.random() * videoList.length)]);
    }
  };

  return (
    <div
      className="window"
      onLoad={windowInit}
      style={{
        display: windowDisplay,
        top: windowPos[1],
        left: windowPos[0],
        width: windowSize[0],
        cursor: cursorIcon,
      }}
    >
      <div
        className="window-control-bar"
        style={{ borderRadius: controlBarBorder, height: controlBarSize }}
      >
        <div className="window-buttons">
          <div
            className="window-btn close"
            style={{ animationName: closeBtnAnim }}
            onClick={closeWindow}
            onMouseEnter={enterCloseBtn}
            onMouseLeave={leaveCloseBtn}
          >
            <p
              className="window-btn-text close"
              style={{ display: closeIconDisplay, animationName: closeBtnTextAnim }}
            >
              x
            </p>
          </div>
          <div
            className="window-btn min"
            style={{ animationName: minBtnAnim }}
            onClick={minWindow}
            onMouseEnter={enterMinBtn}
            onMouseLeave={leaveMinBtn}
          >
            <p
              className="window-btn-text min"
              style={{ display: minIconDisplay, animationName: minBtnTextAnim }}
            >
              -
            </p>
          </div>
          <div
            className="window-btn max"
            style={{ animationName: maxBtnAnim }}
            onClick={maxWindow}
            onMouseEnter={enterMaxBtn}
            onMouseLeave={leaveMaxBtn}
          >
            <p
              className="window-btn-text max"
              style={{ display: maxIconDisplay, animationName: maxBtnTextAnim }}
            >
              {maxBtnText}
            </p>
          </div>
        </div>
        <div className="window-drag-area" onPointerDown={enableDrag}>
          <div>
            <p className="window-title">{windowTitle}</p>
          </div>
        </div>
      </div>
      <div
        className="window-body"
        style={{
          height: windowSize[1] - controlBarSize,
          display: windowBodyDisplay,
        }}
      >
        <div
          className="resize-box left"
          onMouseEnter={setCursorResizeW}
          onMouseLeave={setCursorNormal}
        ></div>
        <div
          className="resize-box bottom"
          onMouseDown={enableResizeH}
          onMouseEnter={setCursorResizeH}
          onMouseLeave={setCursorNormal}
        ></div>
        <div
          className="resize-box right"
          onMouseEnter={setCursorResizeW}
          onMouseLeave={setCursorNormal}
        ></div>
        <iframe
          title={windowTitle}
          onLoad={getRandomVideo}
          allowFullScreen={false}
          className="window-content"
          src={"https://www.youtube.com/embed/" + randomVideo + "?autoplay=1"}
          style={{ display: windowContentDisplay }}
        ></iframe>
      </div>
    </div>
  );
}

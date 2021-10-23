import { useEffect, useState } from "react";
import "./Window.scss";

export function Window() {
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
  let [cursorPos, setCursorPos] = useState<number[]>([0, 0]);
  let [windowDisplay, setWindowDisplay] = useState<string>("block");
  let [windowBodyDisplay, setWindowBodyDisplay] = useState<string>("block");
  let [windowContentDisplay, setWindowContentDisplay] = useState<string>("block");
  let [closeIconDisplay, setCloseIconDisplay] = useState<string>("none");
  let [minIconDisplay, setMinIconDisplay] = useState<string>("none");
  let [maxIconDisplay, setMaxIconDisplay] = useState<string>("none");
  let [windowTitle, setWindowTitle] = useState<string>("Window");
  let [windowDragOffset, setWindowDragOffset] = useState<number[]>([0, 0]);

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
      setCursorPos([e.x, e.y]);
      if (!windowFullscreen) {
        setWindowDragOffset([e.x - windowPos[0], e.y - windowPos[1]]);
      }
    };
    document.addEventListener("mousedown", mouseDown);
    return () => {
      document.removeEventListener("mousedown", mouseDown);
    };
  }, [windowPos]);

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
    if (windowFullscreen) {
      setWindowSize(oldWindowSize);
      setWindowFullscreen(false);
    }
    if (!windowResize) {
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
    setCloseIconDisplay("block");
  };
  let leaveCloseBtn = () => {
    setCloseIconDisplay("none");
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
    setMinIconDisplay("block");
  };
  let leaveMinBtn = () => {
    setMinIconDisplay("none");
  };

  // MAX BUTTON
  let maxWindow = () => {
    if (!windowDrag) {
      if (windowFullscreen) {
        setWindowSize(oldWindowSize);
        setWindowPos(oldWindowPos);
      } else {
        setOldWindowPos(windowPos);
        setWindowPos([0, 0]);
        setOldWindowSize(windowSize);
        setWindowSize([window.innerWidth, window.innerHeight]);
      }
      setWindowFullscreen(!windowFullscreen);
    }
  };
  let enterMaxBtn = () => {
    setMaxIconDisplay("block");
  };
  let leaveMaxBtn = () => {
    setMaxIconDisplay("none");
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

  return (
    <div
      className="window"
      style={{
        display: windowDisplay,
        top: windowPos[1],
        left: windowPos[0],
        width: windowSize[0],
        cursor: cursorIcon,
      }}
    >
      <div className="window-control-bar" style={{ borderRadius: controlBarBorder }}>
        <div className="window-buttons">
          <div
            className="window-btn close"
            onClick={closeWindow}
            onMouseEnter={enterCloseBtn}
            onMouseLeave={leaveCloseBtn}
          >
            <p className="window-btn-text" style={{ display: closeIconDisplay }}>
              x
            </p>
          </div>
          <div
            className="window-btn min"
            onClick={minWindow}
            onMouseEnter={enterMinBtn}
            onMouseLeave={leaveMinBtn}
          >
            <p className="window-btn-text" style={{ display: minIconDisplay }}>
              -
            </p>
          </div>
          <div
            className="window-btn max"
            onClick={maxWindow}
            onMouseEnter={enterMaxBtn}
            onMouseLeave={leaveMaxBtn}
          >
            <p className="window-btn-text" style={{ display: maxIconDisplay }}>
              +
            </p>
          </div>
        </div>
        <div className="window-drag-area" onMouseDown={enableDrag}>
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
          className="window-content"
          same-site="Strict"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&loop=1&autopause=0"
          style={{ display: windowContentDisplay }}
        ></iframe>
      </div>
    </div>
  );
}

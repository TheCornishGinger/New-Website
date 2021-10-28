import { useEffect, useState } from "react";
import { isTouchDevice } from "../../globalFunctions";
import "./Window.scss";

type WindowProps = {
  src: string;
  title?: string;
  size?: number[];
  position?: number[];
  placeholder?: boolean;
  fixedPlace?: boolean;
  // setMyVariable: (variable: string) => void; // func that takes a string and returns void
};

export function Window({
  src,
  title,
  size,
  position,
  placeholder,
  fixedPlace,
}: WindowProps) {
  const _title = title || "Window";
  const _placeholder = placeholder || false;
  const _fixedPlace = fixedPlace || false;
  const _size = size || [
    Math.floor(window.innerWidth / 2),
    Math.floor(window.innerHeight / 2),
  ];
  const _position = position || [
    window.innerWidth / 2 - _size[0] / 2,
    window.innerHeight / 2 - _size[1] / 2,
  ];

  // RANDOM VIDEO STUFF
  const videoList = [
    "izGwDsrQ1eQ",
    "dQw4w9WgXcQ",
    "y6120QOlsfU",
    "L_jWHffIx5E",
    "k85mRPqvMbE",
  ];
  let [randomVideo, setRandomVideo] = useState<string>();
  //eslint-disable-next-line
  let [controlBarSize, setControlBarSize] = useState<number>(30);
  let [controlBarBorder, setControlBarBorder] = useState<number>(0);
  let [windowDrag, setWindowDrag] = useState<boolean>(false);
  let [windowResize, setWindowResize] = useState<boolean>(false);
  let [windowResizeState, setWindowResizeState] = useState<
    "bottom" | "left" | "right"
  >();
  let [windowPositionType, setWindowPositionType] = useState<"absolute" | "initial">(
    "absolute"
  );
  let [windowFullscreen, setWindowFullscreen] = useState<boolean>(false);
  let [windowSize, setWindowSize] = useState<any>(_size);
  let [rawWidth, setRawWidth] = useState<any>();
  let [bodyHeight, setBodyHeight] = useState<number>();
  let [windowPos, setWindowPos] = useState<number[]>(_position);
  let [windowContentSize, setWindowContentSize] = useState<number[]>([0, 0]);
  let [oldWindowSize, setOldWindowSize] = useState<number[]>([0, 0]);
  let [oldWindowPos, setOldWindowPos] = useState<number[]>([0, 0]);
  let [cursorIcon, setCursorIcon] = useState<string>("default");
  let [windowDisplay, setWindowDisplay] = useState<"block" | "none">("none");
  let [windowBodyDisplay, setWindowBodyDisplay] = useState<"flex" | "none">("flex");
  let [windowContentInteraction, setWindowContentInteraction] = useState<
    "all" | "none"
  >();
  let [closeIconDisplay, setCloseIconDisplay] = useState<"block" | "none">("none");
  let [minIconDisplay, setMinIconDisplay] = useState<"block" | "none">("none");
  let [maxIconDisplay, setMaxIconDisplay] = useState<"block" | "none">("none");
  //eslint-disable-next-line
  let [windowTitle, setWindowTitle] = useState<string>(_title);
  let [windowDragOffset, setWindowDragOffset] = useState<number[]>([0, 0]);
  let [maxBtnText, setMaxBtnText] = useState<"<>" | "><">("<>");
  let [controlBtnColor, setControlBtnColor] = useState<" none" | " disabled">(
    " none"
  );

  // ANIMATION
  let btnAnimTime = 150;
  let [closeBtnAnim, setCloseBtnAnim] = useState<string>();
  let [closeBtnTextAnim, setCloseBtnTextAnim] = useState<string>();
  let [minBtnAnim, setMinBtnAnim] = useState<string>();
  let [minBtnTextAnim, setMinBtnTextAnim] = useState<string>();
  let [maxBtnAnim, setMaxBtnAnim] = useState<string>();
  let [maxBtnTextAnim, setMaxBtnTextAnim] = useState<string>();
  let [windowAnim, setWindowAnim] = useState<"none" | "maxWindow">();
  let [windowBodyAnim, setWindowBodyAnim] = useState<"none" | "hideWindow">();

  //PLACEHOLDER
  let [placeholderSize, setPlaceholderSize] = useState<number[]>([0, 0]);
  let [placeholderDisplay, setPlaceholderDisplay] = useState<"block" | "none">(
    "none"
  );

  //EVENTS
  let [mouseDownEvent, setMouseDownEvent] = useState<"mousedown" | "touchstart">(
    "mousedown"
  );
  let [mouseUpEvent, setMouseUpEvent] = useState<"mouseup" | "touchend">("mouseup");
  let [mouseMoveEvent, setMouseMoveEvent] = useState<"mousemove" | "touchmove">(
    "mousemove"
  );

  // UPDATE RAW WIDTH
  useEffect(() => {
    if (!_fixedPlace) {
      setRawWidth(windowSize[0]);
    }
  }, [_fixedPlace, windowSize]);

  // UPDATE BODY HEIGHT
  useEffect(() => {
    setBodyHeight(windowSize[1] - controlBarSize);
  }, [windowSize, controlBarSize]);

  // MOUSE MOVE
  useEffect(() => {
    let mouseMove = (e: any) => {
      let x, y;
      if (isTouchDevice()) {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
      } else {
        x = e.x;
        y = e.y;
      }
      if (windowDrag) {
        let posX = x - windowDragOffset[0];
        let posY = y - windowDragOffset[1];
        if (x + windowSize[0] - windowDragOffset[0] > window.innerWidth) {
          posX = window.innerWidth - windowSize[0];
        } else if (posX < 2) {
          posX = 1;
        }
        if (y + windowSize[1] - windowDragOffset[1] > window.innerHeight) {
          posY = window.innerHeight - windowSize[1];
        } else if (posY < 2) {
          posY = 1;
        }
        setWindowPos([posX, posY]);
      } else if (windowResize) {
        if (windowResizeState === "bottom") {
          setWindowSize([windowSize[0], y - windowPos[1]]);
        } else if (windowResizeState === "left") {
          setWindowPos([x, windowPos[1]]);
          //setWindowSize([windowSize[0], windowSize[1]]);
        } else if (windowResizeState === "right") {
          setWindowSize([x - windowPos[0], windowSize[1]]);
        }
      }
    };
    document.addEventListener(mouseMoveEvent, mouseMove);
    return () => {
      document.removeEventListener(mouseMoveEvent, mouseMove);
    };
  }, [
    windowPos,
    windowSize,
    windowDrag,
    windowResize,
    windowResizeState,
    windowDragOffset,
    mouseMoveEvent,
  ]);

  // WINDOW DRAG OFFSET
  useEffect(() => {
    let mouseDown = (e: any) => {
      let x, y;
      if (isTouchDevice()) {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
      } else {
        x = e.x;
        y = e.y;
      }
      setWindowDragOffset([
        Math.floor(x) - windowPos[0],
        Math.floor(y) - windowPos[1],
      ]);
    };
    document.addEventListener(mouseDownEvent, mouseDown);
    return () => {
      document.removeEventListener(mouseDownEvent, mouseDown);
    };
  }, [windowPos, mouseDownEvent]);

  // WINDOW RESIZE
  useEffect(() => {
    if (!windowResize) {
      setOldWindowSize(windowSize);
      setWindowContentSize(windowSize);
    }
    //eslint-disable-next-line
  }, [windowResize]);

  // MOUSE UP
  useEffect(() => {
    let mouseUp = () => {
      if (windowResize) {
        setWindowResize(false);
      }
      if (windowDrag) {
        setWindowDrag(false);
        setCursorIcon("default");
      }
    };
    document.addEventListener(mouseUpEvent, mouseUp);
    return () => {
      document.removeEventListener(mouseUpEvent, mouseUp);
    };
  }, [windowResize, windowDrag, mouseUpEvent]);

  // BODY CONTENT INTERACTION
  useEffect(() => {
    if (!windowDrag || !windowResize) {
      setWindowContentInteraction("all");
    }
    if (windowDrag || windowResize) {
      setWindowContentInteraction("none");
    }
  }, [windowResize, windowDrag]);

  let enableDrag = () => {
    if (!_fixedPlace && !windowResize) {
      if (windowFullscreen) {
        setWindowSize(oldWindowSize);
        setWindowFullscreen(false);
      }
      setCursorIcon("grabbing");
      setWindowDrag(true);
    }
  };

  // ENABLE WINDOW RESIZE
  let enableResizeBottom = () => {
    if (!_fixedPlace && controlBarBorder === 0) {
      setWindowResizeState("bottom");
      setWindowResize(true);
    }
  };
  let enableResizeLeft = () => {
    if (!_fixedPlace && controlBarBorder === 0) {
      setWindowResizeState("left");
      setWindowResize(true);
    }
  };
  let enableResizeRight = () => {
    if (!_fixedPlace && controlBarBorder === 0) {
      setWindowResizeState("right");
      setWindowResize(true);
    }
  };

  // CLOSE BUTTON
  let closeWindow = () => {
    if (!_fixedPlace && !windowDrag && !windowResize) {
      setWindowDisplay("none");
    }
  };
  let enterCloseBtn = () => {
    if (!isTouchDevice()) {
      setCloseBtnAnim("btnEnter");
      setCloseBtnTextAnim("textEnter");
      setCloseIconDisplay("block");
    }
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
    if (!_fixedPlace && !windowDrag && !windowResize) {
      if (controlBarBorder > 0) {
        setWindowBodyDisplay("flex");
        setWindowBodyAnim("none");
        setControlBarBorder(0);
      } else {
        setWindowBodyAnim("hideWindow");
        setControlBarBorder(5);
      }
    }
  };
  let enterMinBtn = () => {
    if (!isTouchDevice()) {
      setMinBtnAnim("btnEnter");
      setMinBtnTextAnim("textEnter");
      setMinIconDisplay("block");
    }
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
    if (!windowDrag && !windowResize) {
      if (windowFullscreen) {
        if (_fixedPlace) {
          setWindowPositionType("initial");
        }
        setWindowSize(oldWindowSize);
        setWindowContentSize(oldWindowSize);
        setWindowPos(oldWindowPos);
        setMaxBtnText("<>");
      } else {
        let timeout = 400;
        if (_fixedPlace) {
          setWindowPositionType("absolute");
          timeout = 0;
        } else {
          setWindowAnim("maxWindow");
        }
        setOldWindowPos(windowPos);
        setTimeout(() => {
          setWindowPos([0, 0]);
          setOldWindowSize(windowSize);
          setWindowSize([window.innerWidth, window.innerHeight]);
          setWindowContentSize([window.innerWidth, window.innerHeight]);
          setMaxBtnText("><");
          setWindowAnim("none");
        }, timeout);
      }
      setWindowFullscreen(!windowFullscreen);
    }
  };
  let enterMaxBtn = () => {
    if (!isTouchDevice()) {
      setMaxBtnAnim("btnEnter");
      setMaxBtnTextAnim("textEnter");
      setMaxIconDisplay("block");
    }
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
    if (!_fixedPlace) {
      setCursorIcon("e-resize");
    }
  };
  let setCursorResizeH = () => {
    if (!_fixedPlace) {
      setCursorIcon("n-resize");
    }
  };
  let setCursorNormal = () => {
    if (!_fixedPlace) {
      setCursorIcon("default");
    }
  };

  // INIT
  let windowInit = () => {
    if (_placeholder && !_fixedPlace) {
      setPlaceholderDisplay("block");
      setPlaceholderSize(_size);
    }
    if (_fixedPlace) {
      setWindowPositionType("initial");
      setRawWidth("auto");
      setControlBtnColor(" disabled");
    }
    if (isTouchDevice()) {
      setMouseDownEvent("touchstart");
      setMouseMoveEvent("touchmove");
      setMouseUpEvent("touchend");
    }
    setOldWindowSize(_size);
    setWindowDisplay("block");
  };

  //eslint-disable-next-line
  let getRandomVideo = () => {
    if (!randomVideo) {
      setRandomVideo(videoList[Math.floor(Math.random() * videoList.length)]);
    }
  };

  return (
    <>
      <div
        id="window-placeholder"
        style={{
          width: placeholderSize[0],
          height: placeholderSize[1],
          display: placeholderDisplay,
        }}
      ></div>
      <div
        className="window no-select"
        onLoad={windowInit}
        style={{
          position: windowPositionType,
          animationName: windowAnim,
          display: windowDisplay,
          top: windowPos[1],
          left: windowPos[0],
          width: rawWidth,
          cursor: cursorIcon,
        }}
      >
        <div
          className="window-control-bar"
          style={{ borderRadius: controlBarBorder, height: controlBarSize }}
        >
          <div className="window-buttons">
            <div
              className={"window-btn close" + controlBtnColor}
              style={{ animationName: closeBtnAnim }}
              onClick={closeWindow}
              onMouseEnter={enterCloseBtn}
              onMouseLeave={leaveCloseBtn}
            >
              <p
                className="window-btn-text close"
                style={{
                  display: closeIconDisplay,
                  animationName: closeBtnTextAnim,
                }}
              >
                x
              </p>
            </div>
            <div
              className={"window-btn min" + controlBtnColor}
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
              className={"window-btn max"}
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
            <div style={{ display: "flex", margin: "auto" }}>
              <p className="window-title">{windowTitle}</p>
            </div>
          </div>
        </div>
        <div
          className="window-body"
          style={{
            animationName: windowBodyAnim,
            width: rawWidth,
            height: bodyHeight,
            display: windowBodyDisplay,
          }}
        >
          <div
            className="resize-box left"
            style={{ height: bodyHeight }}
            onPointerDown={enableResizeLeft}
            onMouseEnter={setCursorResizeW}
            onMouseLeave={setCursorNormal}
          ></div>
          <div
            className="resize-box bottom"
            onPointerDown={enableResizeBottom}
            onMouseEnter={setCursorResizeH}
            onMouseLeave={setCursorNormal}
          ></div>
          <div
            className="resize-box right"
            style={{ height: bodyHeight }}
            onPointerDown={enableResizeRight}
            onMouseEnter={setCursorResizeW}
            onMouseLeave={setCursorNormal}
          ></div>
          <iframe
            title={windowTitle}
            //onLoad={getRandomVideo}
            //allowFullScreen={false}
            className="window-content"
            src={src} //{"https://www.youtube.com/embed/" + randomVideo + "?autoplay=1"}
            style={{
              width: windowContentSize[0] - 2,
              height: windowContentSize[1] - controlBarSize - 1,
              pointerEvents: windowContentInteraction,
            }}
          ></iframe>
        </div>
      </div>
    </>
  );
}

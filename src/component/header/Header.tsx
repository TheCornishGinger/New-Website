import logoImg from "../../resource/header/logo.png";
import gamesImg from "../../resource/header/menu_games.png";
import projectsImg from "../../resource/header/menu_projects.png";
import bioImg from "../../resource/header/menu_bio.png";
import twitterIcon from "../../resource/header/twitter.png";
import youtubeIcon from "../../resource/header/youtube.png";

import "./Header.scss";
import { useEffect, useState } from "react";
import { isTouchDevice } from "../../globalFunctions";
import { Link } from "react-router-dom";

export function Header() {
  let headerSize = 80;

  // STATES
  let [init, setInit] = useState<boolean>(false);
  let [menuState, setMenuState] = useState<boolean>(false);
  let [sideHeaderClass, setSideHeaderClass] = useState<string>("side-header");
  //let [headerSize, setHeaderSize] = useState<number>(80);
  let [hoverTitle, setHoverTitle] = useState<string>();
  let [hoverTitleY, setHoverTitleY] = useState<number>();

  // ANIMATION
  let [headerAnim, setHeaderAnim] = useState<string>();
  let [menuBtnColor, setMenuBtnColor] = useState<string>();
  //let [menuBtnChildAnim, setMenuBtnChildAnim] = useState<string>();
  let [menuBtnClosedAnim, setMenuBtnClosedAnim] = useState<string>();
  let [menuBtnOpen1Anim, setMenuBtnOpen1Anim] = useState<string>();
  let [menuBtnOpen2Anim, setMenuBtnOpen2Anim] = useState<string>();
  let [gamesBtnAnim, setGamesBtnAnim] = useState<"lighten" | "darken">();
  let [projectsBtnAnim, setProjectsBtnAnim] = useState<"lighten" | "darken">();
  let [bioBtnAnim, setBioBtnAnim] = useState<"lighten" | "darken">();
  let [twitterIconAnim, setTwitterIconAnim] = useState<"lighten" | "darken">();
  let [youtubeIconAnim, setYoutubeIconAnim] = useState<"lighten" | "darken">();

  // DISPLAY
  //eslint-disable-next-line
  let [menuTriggerDisplay, setMenuTriggerDisplay] = useState<string>("block"); //pc only
  let [menuBtnDisplay, setMenuBtnDisplay] = useState<string>("none");
  let [menuBtnClosedDisplay, setMenuBtnClosedDisplay] = useState<string>("flex");
  let [menuBtnOpenDisplay, setMenuBtnOpenDisplay] = useState<string>("none");
  let [hoverTitleDisplay, setHoverTitleDisplay] = useState<"none" | "flex">("none");

  // FUNCTIONS
  useEffect(() => {
    if (init) {
      let mouseEvent = (e: MouseEvent) => {
        if (!isTouchDevice()) {
          let size = headerSize * 1.5;
          if (!menuState && e.pageX < size) {
            openMenu();
          } else if (menuState && e.pageX > size) {
            closeMenu();
          }
        }
        if (hoverTitleDisplay !== "none") {
          setHoverTitleY(e.y - 20);
        }
      };
      document.addEventListener("mousemove", mouseEvent);
      return () => {
        document.removeEventListener("mousemove", mouseEvent);
      };
    }
  }, [init, menuState, headerSize, hoverTitleDisplay]);

  // OPEN CLOSE MENU
  let openMenu = () => {
    setMenuState(true);
    setHeaderAnim("openSideHeader");
  };

  let closeMenu = () => {
    setMenuState(false);
    setHeaderAnim("closeSideHeader");
  };

  // TOGGLE MENU (MOBILE ONLY)
  function toggleMenu() {
    let val;
    if (menuState) {
      val = "close";
      setMenuBtnColor("menuBtnClose");
      setMenuBtnOpen1Anim("closeMobileMenuTwo");
      setMenuBtnOpen2Anim("closeMobileMenuThree");
      setTimeout(() => {
        setMenuBtnClosedDisplay("flex");
        setMenuBtnOpenDisplay("none");
        setMenuBtnClosedAnim("closeMobileMenuOne");
      }, 80);
    } else {
      val = "open";
      setMenuBtnColor("menuBtnOpen");
      setMenuBtnClosedAnim("openMobileMenuOne");
      setTimeout(() => {
        setMenuBtnClosedDisplay("none");
        setMenuBtnOpenDisplay("flex");
        setMenuBtnOpen1Anim("openMobileMenuTwo");
        setMenuBtnOpen2Anim("openMobileMenuThree");
      }, 80);
    }
    setHeaderAnim(val + "SideHeaderMobile");
    setMenuState(!menuState);
  }

  // SOCIAL ICONS
  let enterTwitterIcon = () => {
    setTwitterIconAnim("darken");
  };
  let leaveTwitterIcon = () => {
    setTwitterIconAnim("lighten");
  };
  let pressTwitterIcon = () => {
    window.location.href = "http://www.twitter.com/Wrigscraft";
  };
  let enterYoutubeIcon = () => {
    setYoutubeIconAnim("darken");
  };
  let leaveYoutubeIcon = () => {
    setYoutubeIconAnim("lighten");
  };
  let pressYoutubeIcon = () => {
    window.location.href = "http://www.youtube.com/TheCornishGingerOfficial";
  };

  // HOVER TITLE HANDLING
  let showTitleGames = () => {
    setHoverTitle("Games");
    setHoverTitleDisplay("flex");
    setGamesBtnAnim("darken");
  };

  let showTitleProjects = () => {
    setHoverTitle("Projects");
    setHoverTitleDisplay("flex");
    setProjectsBtnAnim("darken");
  };

  let showTitleBio = () => {
    setHoverTitle("Bio");
    setHoverTitleDisplay("flex");
    setBioBtnAnim("darken");
  };

  let hideTitle = () => {
    let anim = "darken";
    setHoverTitleDisplay("none");
    if (bioBtnAnim === anim) {
      setBioBtnAnim("lighten");
    }
    if (gamesBtnAnim === anim) {
      setGamesBtnAnim("lighten");
    }
    if (projectsBtnAnim === anim) {
      setProjectsBtnAnim("lighten");
    }
  };

  // ON INIT
  if (!init) {
    if (isTouchDevice()) {
      setMenuBtnDisplay("flex");
      setMenuTriggerDisplay("none");
      setSideHeaderClass(sideHeaderClass + " mobile");
    }
    setInit(true);
  }

  // HTML
  return (
    <div id="header">
      <div className="placeholder-top"></div>
      <div className="top-header">
        <div className="top-header-wrap outer">
          <div className="top-header-wrap inner">
            <Link to="/">
              <div className="box header logo">
                <img src={logoImg} className="box-image logo" alt="Logo" />
              </div>
            </Link>
            <p className="title">TheCornishGinger</p>
            <div className="smallTitle">
              <p className="smallTitleText">The Cornish</p>
              <p className="smallTitleText">Ginger</p>
            </div>

            <div
              className="box header menu-btn"
              style={{ display: menuBtnDisplay, animationName: menuBtnColor }}
              onClick={toggleMenu}
            >
              <div
                className="menu-btn-parent closed"
                style={{
                  display: menuBtnClosedDisplay,
                  animationName: menuBtnClosedAnim,
                }}
              >
                <div className="menu-btn-child closed"></div>
                <div className="menu-btn-child closed"></div>
                <div className="menu-btn-child closed"></div>
              </div>
              <div
                className="menu-btn-parent open"
                style={{
                  display: menuBtnOpenDisplay,
                  animationName: "none",
                }}
              >
                <div
                  className="menu-btn-child open one"
                  style={{ animationName: menuBtnOpen1Anim }}
                ></div>
                <div
                  className="menu-btn-child open two"
                  style={{ animationName: menuBtnOpen2Anim }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={sideHeaderClass} style={{ animationName: headerAnim }}>
        <div className="side-header-wrap outer">
          <div className="side-header-wrap inner">
            <div
              className="box side games"
              onMouseOver={showTitleGames}
              onMouseLeave={hideTitle}
              onClick={() => {
                window.location.assign("/games");
              }}
              style={{ animationName: gamesBtnAnim }}
            >
              <img src={gamesImg} className="box-image" alt="Games" />
              <p className="box-text">Games</p>
            </div>

            <Link to="/projects">
              <div
                className="box side projects"
                onMouseOver={showTitleProjects}
                onMouseLeave={hideTitle}
                style={{ animationName: projectsBtnAnim }}
              >
                <img src={projectsImg} className="box-image" alt="Projects" />
                <p className="box-text">Projects</p>
              </div>
            </Link>
            <Link to="/about">
              <div
                className="box side bio"
                onMouseOver={showTitleBio}
                onMouseLeave={hideTitle}
                style={{ animationName: bioBtnAnim }}
              >
                <img src={bioImg} className="box-image" alt="Bio" />
                <p className="box-text">Bio</p>
              </div>
            </Link>
            <div className="social-icon-wrap">
              <img
                src={twitterIcon}
                alt="Twitter"
                className="social-icon"
                style={{ animationName: twitterIconAnim }}
                onMouseOver={enterTwitterIcon}
                onMouseLeave={leaveTwitterIcon}
                onPointerDown={pressTwitterIcon}
              />
              <img
                src={youtubeIcon}
                alt="YouTube"
                className="social-icon"
                style={{ animationName: youtubeIconAnim }}
                onMouseOver={enterYoutubeIcon}
                onMouseLeave={leaveYoutubeIcon}
                onPointerDown={pressYoutubeIcon}
              />
            </div>
          </div>
        </div>
        <div className="side-header-text">
          <p>Hover for menu</p>
        </div>
      </div>
      <div
        className="hover-title-wrap"
        style={{ display: hoverTitleDisplay, top: hoverTitleY }}
      >
        <div className="hover-title-triangle"></div>
        <div className="hover-title-box">
          <span className="hover-title-text">{hoverTitle}</span>
        </div>
      </div>
    </div>
  );
}

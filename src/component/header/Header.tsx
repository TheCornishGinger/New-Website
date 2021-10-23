import logoImg from "../../resource/header/logo.png";
import gamesImg from "../../resource/header/menu_games.png";
import projectsImg from "../../resource/header/menu_projects.png";
import bioImg from "../../resource/header/menu_bio.png";
import "./Header.scss";
import { useEffect, useState } from "react";
import { isTouchDevice } from "../../globalFunctions";
import { Link } from "react-router-dom";

export function Header() {
  // STATES
  let [init, setInit] = useState<boolean>(false);
  let [menuState, setMenuState] = useState<boolean>(false);
  let [sideHeaderClass, setSideHeaderClass] = useState<string>("side-header");

  // ANIMATION
  let [headerAnim, setHeaderAnim] = useState<string>();
  let [menuBtnColor, setMenuBtnColor] = useState<string>();
  let [menuBtnChildAnim, setMenuBtnChildAnim] = useState<string>();
  let [menuBtnClosedAnim, setMenuBtnClosedAnim] = useState<string>();
  let [menuBtnOpen1Anim, setMenuBtnOpen1Anim] = useState<string>();
  let [menuBtnOpen2Anim, setMenuBtnOpen2Anim] = useState<string>();

  // DISPLAY
  let [menuTriggerDisplay, setMenuTriggerDisplay] = useState<string>("block"); //pc only
  let [menuBtnDisplay, setMenuBtnDisplay] = useState<string>("none");
  let [menuBtnClosedDisplay, setMenuBtnClosedDisplay] = useState<string>("flex");
  let [menuBtnOpenDisplay, setMenuBtnOpenDisplay] = useState<string>("none");

  // FUNCTIONS
  useEffect(() => {
    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseenter", mouseEnter);
    document.addEventListener("mouseleave", mouseLeave);
    function mouseMove() {
      //get the mouse x if less then set amount openMenu else closeMenu
    }
    function mouseEnter() {}
    function mouseLeave() {}
    return () => {
      document.removeEventListener("mouseenter", mouseEnter);
      document.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  let openMenu = () => {
    setHeaderAnim("openSideHeader");
  };

  let closeMenu = () => {
    setHeaderAnim("closeSideHeader");
  };

  let toggleMenu = () => {
    //mobile only
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
      <div
        className="side-header-trigger"
        onMouseOver={openMenu}
        onMouseLeave={closeMenu}
        style={{ display: menuTriggerDisplay }}
      ></div>

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
              /*id="menu-btn"*/
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
                <div
                  className="menu-btn-child closed"
                  style={{ animationName: menuBtnChildAnim }}
                ></div>
                <div
                  className="menu-btn-child closed"
                  style={{ animationName: menuBtnChildAnim }}
                ></div>
                <div
                  className="menu-btn-child closed"
                  style={{ animationName: menuBtnChildAnim }}
                ></div>
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
            <Link to="/games">
              <div
                className="box side games"
                //   onmouseover="buttonHover('games')"
                //   onclick="buttonPress('games')"
                //   onmouseleave="buttonUnhover('games')"
                id="games-btn"
              >
                <img src={gamesImg} className="box-image" alt="Games" />
                <p className="box-text">Games</p>
              </div>
            </Link>
            <div
              className="box side projects"
              //   onmouseover="buttonHover('projects')"
              //   onclick="buttonPress('projects')"
              //   onmouseleave="buttonUnhover('projects')"
              id="projects-btn"
            >
              <img src={projectsImg} className="box-image" alt="Projects" />
              <p className="box-text">Projects</p>
            </div>
            <div
              className="box side"
              //   onmouseover="buttonHover('bio')"
              //   onclick="buttonPress('bio')"
              //   onmouseleave="buttonUnhover('bio')"
              id="bio-btn"
            >
              <img src={bioImg} className="box-image" alt="Bio" />
              <p className="box-text">Bio</p>
            </div>
          </div>
        </div>
        <div className="side-header-text">
          <p>Hover for menu</p>
        </div>
      </div>
    </div>
  );
}

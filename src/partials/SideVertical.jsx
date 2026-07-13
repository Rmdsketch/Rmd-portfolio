import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./css/SideVertical.css";

function SideVertical(props) {
  const { t: useT } = useTranslation();
  const t = useT('nav', { returnObjects: true });

  var numberPage;
  var titlePage;
  var directUp;
  var directDown;
  const { pathname } = useLocation();
  const date = new Date().toISOString().slice(0, 10);

  switch (pathname) {
    case "/":
      numberPage = "01";
      titlePage = t.home;
      break;
    case "/about":
      numberPage = "02";
      titlePage = t.about;
      break;
    case "/projects":
      numberPage = "03";
      titlePage = t.projects;
      break;
    case "/contact":
      numberPage = "04";
      titlePage = t.contact;
      break;
    default:
  }

  // Direct Up
  switch (pathname) {
    case "/":
      directUp = "/contact";
      break;
    case "/about":
      directUp = "/";
      break;
    case "/projects":
      directUp = "/about";
      break;
    case "/contact":
      directUp = "/projects";
      break;
    default:
  }

  // Direct Down
  switch (pathname) {
    case "/":
      directDown = "/about";
      break;
    case "/about":
      directDown = "/projects";
      break;
    case "/projects":
      directDown = "/contact";
      break;
    case "/contact":
      directDown = "/";
      break;
    default:
  }

  return (
    <>
      <div className="side-vertical">
        <div className="upper-side d-flex">
          <p className="side-title">{titlePage}</p>
          <p className="side-date">{date}</p>
        </div>
        <div className="lower-side d-flex">
          <p className="side-number">
            {numberPage} <span className="disabled-color">/ 04</span>
          </p>
          <Link to={directUp} className="d-flex align-items-center pb-3 arrow">
            <AiOutlineArrowUp />
          </Link>
          <Link to={directDown} className="d-flex align-items-center arrow">
            <AiOutlineArrowDown />
          </Link>
        </div>
      </div>
    </>
  );
}

export default SideVertical;

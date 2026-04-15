import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { MdDarkMode, MdLightMode, MdTranslate } from "react-icons/md";
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";
import "./css/NavTop.css";

function NavTop() {
  const [toogleMenu, setToogleMenu] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].nav;

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  function toogleOpen() {
    setToogleMenu(true);
  }

  function toogleClose() {
    setToogleMenu(false);
  }

  if (toogleMenu) {
    return (
      <>
        <NavTop />
        <div className="menu">
          <Container fluid className="menu-close">
            <button className="toogle-menu ms-auto" onClick={toogleClose}>
              <GrClose />
            </button>
            <div className="menu-list">
              <NavLink to="/" onClick={toogleClose}>
                {t.home}
              </NavLink>
              <NavLink to="/about" onClick={toogleClose}>
                {t.about}
              </NavLink>
              <NavLink to="/skills" onClick={toogleClose}>
                {t.skills}
              </NavLink>
              <NavLink to="/projects" onClick={toogleClose}>
                {t.projects}
              </NavLink>
              <NavLink to="/contact" onClick={toogleClose}>
                {t.contact}
              </NavLink>
            </div>
          </Container>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar className="navtop py-3" expand="lg">
        <Container fluid className="px-4">
          <Navbar.Brand className="navtop-brand">
            <Link to="/">
              Rmd<i id="normal">Sketch</i>.
            </Link>
          </Navbar.Brand>
          <div className="nav-controls ms-auto d-flex align-items-center">
            <button className="lang-toggle" onClick={toggleLanguage}>
              <MdTranslate />
            </button>
            <button className="theme-toggle" onClick={toggleTheme}>
              {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
            </button>
            <button className="toogle-menu" onClick={toogleOpen}>
              <FaAlignRight />
            </button>
          </div>
          <Nav className="navtop-list ms-auto">
            <Nav.Link className="pe-3">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {t.home}
              </NavLink>
            </Nav.Link>
            <Nav.Link className="pe-3">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {t.about}
              </NavLink>
            </Nav.Link>
            <Nav.Link className="pe-3">
              <NavLink
                to="/skills"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {t.skills}
              </NavLink>
            </Nav.Link>
            <Nav.Link className="pe-3">
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {t.projects}
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {t.contact}
              </NavLink>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavTop;
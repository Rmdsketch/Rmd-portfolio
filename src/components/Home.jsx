import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import profile from "../assets/img/profile.webp";
import hoverProfile from "../assets/img/profile-hover.webp";
import CVDoc from "../assets/download/CV.pdf";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";
import { useEffect } from "react";
import "./css/Home.css";

function Home() {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const defaultImage = theme === "dark" ? profile : hoverProfile;
  const hoverImage = theme === "dark" ? hoverProfile : profile;

  const [currentImage, setCurrentImage] = useState(defaultImage);

  useEffect(() => {
    setCurrentImage(theme === "dark" ? profile : hoverProfile);
  }, [theme]);

  function setProfile() {
    setCurrentImage(hoverImage);
  }

  function setProfileAnimation() {
    setCurrentImage(defaultImage);
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>Muhamad Ramadani - {t("nav.home")}</title>
      </Helmet>
      <Container fluid className="home-wrapper">

        {/* LEFT SIDE: Image */}
        <div className="home-left animate__animated animate__fadeInLeft">
          <img
            className="home-image"
            src={currentImage}
            onMouseOver={setProfile}
            onMouseOut={setProfileAnimation}
            alt="Profile"
          />
        </div>

        {/* RIGHT SIDE: Text Content */}
        <div className="home-right animate__animated animate__fadeInRight">
          <h2 className="hero-title">
            {t("hero.greeting")}<br />{t("hero.name")}
          </h2>
          <p className="hero-subtitle">
            {t("hero.tagline")}
          </p>

          <div className="hero-actions">
            <a
              href={CVDoc}
              download="[CV]_Muhamad_Ramadani.pdf"
              className="btn-resume"
            >
              {t("hero.ctaPrimary")} <FiExternalLink className="btn-icon" />
            </a>

            <NavLink to="/contact" className="btn-contact">
              {t("hero.ctaSecondary")}
            </NavLink>
          </div>
        </div>

      </Container>
    </HelmetProvider>
  );
}

export default Home;
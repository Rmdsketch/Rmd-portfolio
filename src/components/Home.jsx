import { AiFillFileText } from "react-icons/ai";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import profile from "../assets/img/profile.webp";
import hoverProfile from "../assets/img/profile-hover.webp";
import CVDoc from "../assets/download/CV.pdf";
import Hi from "../assets/img/Hi.gif";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";
import "./css/Home.css";

function Home() {
  const { language } = useLanguage();
  const t = translations[language].home;

  function setProfile() {
    setImage(hoverProfile);
  }
  function setProfileAnimation() {
    setImage(profile);
  }
  const [image, setImage] = useState(profile);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Muhamad Ramadani - Home</title>
        </Helmet>
      </HelmetProvider>
      <Container fluid className="home-wrapper">
        <div className="home-left animate__animated animate__fadeInLeft">
          <h3>
            {t.hi} <img width="35" src={Hi} alt="Hi" />, {t.name}
          </h3>
          <h2>
            <span className="name-hover">Muhamad</span>
            <br />
            <span className="name-hover">Ramadani</span>
          </h2>
          <NavLink to="/contact" className="btn-download text-center">
            {t.connect}
          </NavLink>
          <a
            href={CVDoc}
            download
            className="btn-download text-center"
            style={{ marginTop: "10px" }}
          >
            <AiFillFileText className="cv-icon" />
            &nbsp;&nbsp;{t.download_cv}
          </a>
        </div>
        <div className="home-right animate__animated animate__fadeInRight">
          <img
            className="home-image"
            src={image}
            onMouseOver={setProfile}
            onMouseOut={setProfileAnimation}
            alt="Profile"
          />
        </div>
      </Container>
    </>
  );
}

export default Home;
import { Container } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState } from "react";
import Slider from "react-slick";
import FsLightbox from "fslightbox-react";
import certificateImages from "../assets/routes/AllCertificate";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";
import "./css/Skills.css";

function Skills() {
  const { language } = useLanguage();
  const t = translations[language].skills;
  const navT = translations[language].nav;

  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  const openLightboxOnSlide = (number) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const techIcons = [
    { class: "devicon-javascript-plain", title: "JavaScript" },
    { class: "devicon-typescript-plain", title: "TypeScript" },
    { class: "devicon-python-plain", title: "Python" },
    { class: "devicon-dart-plain", title: "Dart" },
    { class: "devicon-html5-plain", title: "HTML" },
    { class: "devicon-css3-plain", title: "CSS" },
    { class: "devicon-react-original", title: "React" },
    { class: "devicon-bootstrap-plain", title: "Bootstrap" },
    { class: "devicon-tailwindcss-plain", title: "Tailwind" },
    { class: "devicon-flutter-plain", title: "Flutter" },
    { class: "devicon-ionic-original", title: "Ionic" },
    { class: "devicon-nodejs-plain", title: "Node.js" },
    { class: "devicon-express-original", title: "Express" },
    { class: "devicon-django-plain", title: "Django" },
    { class: "devicon-flask-plain", title: "Flask" },
    { class: "devicon-mongodb-plain", title: "MongoDB" },
    { class: "devicon-mysql-plain", title: "MySQL" },
    { class: "devicon-sqlite-plain", title: "SQLite" },
    { class: "devicon-firebase-plain", title: "Firebase" },
    { class: "devicon-postman-plain colored", title: "Postman" },
    { class: "devicon-github-plain", title: "Github" },
  ];

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Muhamad Ramadani - {t.title}</title>
        </Helmet>
      </HelmetProvider>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={certificateImages}
        slide={lightboxController.slide}
      />
      <Container fluid className="skills-container wrapper">
        <div className="skills-title animate__animated animate__zoomIn">
          <h3>{t.title}</h3>
          <h4>
            ───&nbsp;&nbsp;{navT.page} <strong>03</strong>
          </h4>
        </div>

        <div className="skills-content-wrapper mt-4">
          <div className="tech-slider-wrapper mb-5 animate__animated animate__fadeIn">
            <Slider {...sliderSettings}>
              {techIcons.map((icon, index) => (
                <div key={index} className="tech-icon-item">
                  <div className="tech-icon-box">
                    <i className={`${icon.class} colored ${icon.title === "Python" ? "python-colored" : ""}`} title={icon.title}></i>
                  </div>
                  <p>{icon.title}</p>
                </div>
              ))}
            </Slider>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="skill-category-card h-100 animate__animated animate__fadeInUp">
                <h5>{t.prog}</h5>
                <div className="skill-tags">
                  <span>Python</span>
                  <span>JavaScript</span>
                  <span>Dart</span>
                  <span>Typescript</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="skill-category-card h-100 animate__animated animate__fadeInUp">
                <h5>{t.front}</h5>
                <div className="skill-tags">
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>React</span>
                  <span>Ionic</span>
                  <span>Bootstrap</span>
                  <span>Tailwind</span>
                  <span>Flutter</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="skill-category-card h-100 animate__animated animate__fadeInUp animate__delay-1s">
                <h5>{t.back}</h5>
                <div className="skill-tags">
                  <span>Node.js</span>
                  <span>Express</span>
                  <span>Django</span>
                  <span>Flask</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="skill-category-card h-100 animate__animated animate__fadeInUp animate__delay-2s">
                <h5>{t.other}</h5>
                <div className="skill-tags">
                  <span>MySQL</span>
                  <span>SQlite</span>
                  <span>MongoDB</span>
                  <span>Firebase</span>
                  <span>Postman</span>
                  <span>GitHub</span>
                </div>
              </div>
            </div>
          </div>

          <div className="certificates-section mt-5 animate__animated animate__fadeInUp animate__delay-3s">
            <h3 className="section-title">{t.cert}</h3>
            <div className="certificates-scroll">
              <div className="row mt-4">
                {certificateImages.map((img, index) => (
                  <div key={index} className="col-lg-4 col-md-6 mb-4">
                    <img
                      src={img}
                      alt="Certificate"
                      className="img-fluid cert-img-plain animate__animated animate__fadeIn"
                      onClick={() => openLightboxOnSlide(index + 1)}
                      style={{ cursor: 'pointer', borderRadius: '8px', width: '100%', height: 'auto' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Skills;
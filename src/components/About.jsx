import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import profileImg from "../assets/img/poto-personal.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/About.css";

const Details = ({ position, company, time, text }) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className="timeline-item">
      <div className="timeline-icon">
        <div className="timeline-icon-inner"></div>
      </div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        viewport={{ once: true, margin: "-50px" }}
        className="timeline-content"
      >
        <h3 className="timeline-title">
          {position}{company && <>&nbsp;<span className="timeline-highlight">@{company}</span></>}
        </h3>
        {time && <span className="timeline-time">{time}</span>}
        <p className="timeline-desc" style={{ whiteSpace: "pre-line", marginTop: "8px" }}>{text}</p>
      </motion.div>
    </li>
  );
};

function About() {
  const { t } = useTranslation();
  const aboutData = t("about", { returnObjects: true });
  const expData = t("experience", { returnObjects: true });
  const navT = t("nav", { returnObjects: true });

  const expRef = useRef(null);

  // Scroll trackers for the glowing cyan lines
  const { scrollYProgress: expScroll } = useScroll({
    target: expRef,
    offset: ["start center", "end center"],
  });

  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>{t("nav.about")} - {aboutData.title}</title>
      </Helmet>

      <main className="about-wrapper dark-mode">

        {/* COL 1: Hero Title */}
        <motion.div
          className="about-col col-hero"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="about-hero-title" style={{ whiteSpace: "pre-line" }}>
            {aboutData.title}
          </h1>
          <h4 style={{ fontFamily: "'Manrope', sans-serif", fontSize: "20px", color: "var(--text-color)", marginTop: "10px" }}>
            ───&nbsp;&nbsp;{navT.page} <strong>02</strong>
          </h4>
        </motion.div>

        {/* COL 2: Bio */}
        <motion.div
          className="about-col col-bio"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="bio-heading">{aboutData.title}</h3>
          <p>{aboutData.description}</p>
          <p style={{ marginTop: "15px" }}><strong>{aboutData.focusTitle}</strong>: {aboutData.focusDescription}</p>
          <ul style={{ marginTop: "10px", paddingLeft: "20px" }}>
            {aboutData.highlights?.map((highlight, index) => (
              <li key={index} style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.95rem", opacity: 0.85, marginBottom: "5px", color: "var(--text-color)" }}>{highlight}</li>
            ))}
          </ul>
          <div className="bio-image-wrapper">
            <img src={profileImg} alt="Profile" className="bio-image" />
          </div>

          {/* Tech Stack Slider */}
          <div className="tech-stack-slider">
            <Slider {...sliderSettings}>
              <div className="tech-slide">
                <i className="devicon-python-plain" style={{ fontSize: "40px" }}></i>
                <p className="tech-name">Python</p>
              </div>
              <div className="tech-slide">
                <i className="devicon-html5-plain colored" style={{ fontSize: "40px" }}></i>
                <p className="tech-name">HTML5</p>
              </div>
              <div className="tech-slide">
                <i className="devicon-css3-plain colored" style={{ fontSize: "40px" }}></i>
                <p className="tech-name">CSS3</p>
              </div>
              <div className="tech-slide">
                <i className="devicon-javascript-plain colored" style={{ fontSize: "40px" }}></i>
                <p className="tech-name">JavaScript</p>
              </div>
              <div className="tech-slide">
                <i className="devicon-fastapi-plain colored" style={{ fontSize: "40px" }}></i>
                <p className="tech-name">FastAPI</p>
              </div>
              <div className="tech-slide">
                <i className="devicon-react-original colored" style={{ fontSize: "40px" }}></i>
                <p className="tech-name">React</p>
              </div>
              <div className="tech-slide">
                <i className="devicon-nodejs-plain colored" style={{ fontSize: "40px" }}></i>
                <p className="tech-name">Node.js</p>
              </div>
              <div className="tech-slide">
                <i className="devicon-mysql-plain colored" style={{ fontSize: "40px" }}></i>
                <p className="tech-name">MySQL</p>
              </div>
              <div className="tech-slide">
                <i className="devicon-pytorch-original colored" style={{ fontSize: "40px" }}></i>
                <p className="tech-name">PyTorch</p>
              </div>
              <div className="tech-slide">
                <i className="devicon-tensorflow-original colored" style={{ fontSize: "40px" }}></i>
                <p className="tech-name">TensorFlow</p>
              </div>
              <div className="tech-slide">
                <i className="devicon-flutter-plain colored" style={{ fontSize: "40px" }}></i>
                <p className="tech-name">Flutter</p>
              </div>
              <div className="tech-slide">
                <i className="devicon-docker-plain colored" style={{ fontSize: "40px" }}></i>
                <p className="tech-name">Docker</p>
              </div>
              <div className="tech-slide">
                <i className="devicon-git-plain colored" style={{ fontSize: "40px" }}></i>
                <p className="tech-name">Git</p>
              </div>
            </Slider>
          </div>
        </motion.div>

        {/* COL 3: Experience */}
        <motion.div
          className="about-col col-exp"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">{expData.competenceTitle}</h2>
          <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.95rem", opacity: 0.85, marginBottom: "30px", color: "var(--text-color)" }}>{expData.summary}</p>
          <div ref={expRef} className="timeline-container">
            <div className="timeline-line-bg"></div>
            <motion.div
              style={{ scaleY: expScroll }}
              className="timeline-line-scroll"
            />
            <ul className="timeline-list">
              {expData.competenceItems?.map((exp, index) => (
                <Details
                  key={index}
                  position={exp.role}
                  text={exp.description}
                />
              ))}
            </ul>
          </div>

          <h2 className="section-title" style={{ marginTop: "60px" }}>{expData.internshipTitle}</h2>
          <div className="timeline-container">
            <div className="timeline-line-bg"></div>
            <motion.div
              style={{ scaleY: expScroll }}
              className="timeline-line-scroll"
            />
            <ul className="timeline-list">
              {expData.internshipItems?.map((exp, index) => (
                <Details
                  key={index}
                  position={exp.role}
                  company={exp.comp}
                  time={exp.dur}
                  text={exp.description}
                />
              ))}
            </ul>
          </div>
        </motion.div>

      </main>
    </HelmetProvider>
  );
}

export default About;
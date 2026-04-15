import { Container } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import './css/About.css';

function About() {
  const { language } = useLanguage();
  const t = translations[language].about;
  const navT = translations[language].nav;

  return (
    <>
      <Container fluid className="about-wrapper">
        <div className="about-left animate__animated animate__zoomIn">
          <h3>{t.title}</h3>
          <h4>
            ───&nbsp;&nbsp;{navT.page} <strong>02</strong>
          </h4>
        </div>

        <div className="about-right">
          <p className="animate__animated animate__fadeIn">
            {t.halo}
          </p>

          <div className="experience-section mt-5 animate__animated animate__fadeInUp">
            <h3 className="section-title">{t.exp_title}</h3>
            <div className="experience-container mt-4">
              <div className="experience-item">
                <div className="exp-dot"></div>
                <div className="exp-content">
                  <h4>{t.exp_1.role}</h4>
                  <p className="company">{t.exp_1.comp}</p>
                  <p className="duration">{t.exp_1.dur}</p>
                  <ul className="exp-details">
                    {t.exp_1.det.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="experience-item">
                <div className="exp-dot"></div>
                <div className="exp-content">
                  <h4>{t.exp_2.role}</h4>
                  <p className="company">{t.exp_2.comp}</p>
                  <p className="duration">{t.exp_2.dur}</p>
                  <ul className="exp-details">
                    {t.exp_2.det.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default About;
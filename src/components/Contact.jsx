import { Container } from 'react-bootstrap';
import { AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';
import { FiCopy, FiExternalLink, FiSend } from 'react-icons/fi';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import './css/Contact.css';

function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;
  const navT = translations[language].nav;

  const [alreadyCopy, setAlreadyCopy] = useState(t.copy);

  function actionCopy() {
    setAlreadyCopy(t.copied);
    setTimeout(function () {
      setAlreadyCopy(t.copy);
    }, 2000);
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Muhamad Ramadani - {t.title}</title>
        </Helmet>
      </HelmetProvider>
      <Container fluid className="contact-wrapper">
        <div className="contact-left animate__animated animate__zoomIn">
          <h3>{t.title}</h3>
          <h4>
            ───&nbsp;&nbsp;{navT.page} <strong>05</strong>
          </h4>
        </div>
        <div className="contact-right">
          <div className="row">
            <div className="col-lg-5 mb-4 animate__animated animate__fadeInLeft">
              <div className="contact-info-list">
                <div className="contact-item">
                  <h3>
                    <AiOutlineMail /> {t.email}
                  </h3>
                  <p>ramadanisketchganteng@gmail.com</p>
                  <CopyToClipboard text="ramadanisketchganteng@gmail.com">
                    <button className="btn-copy" onClick={actionCopy}>
                      <FiCopy /> {alreadyCopy}
                    </button>
                  </CopyToClipboard>
                </div>

                <div className="contact-item">
                  <h3>
                    <AiFillLinkedin /> Linkedin
                  </h3>
                  <p>Muhamad Ramadani</p>
                  <a
                    href="https://www.linkedin.com/in/muhamad-ramadani-608b062b0/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-direct"
                  >
                    {t.visit} <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-7 mb-4 animate__animated animate__fadeInRight">
              <div className="hire-me-card">
                <div className="hire-me-header">
                  <h3>{t.rekrut}</h3>
                  <p>{t.interested}</p>
                </div>
                <form className="hire-me-form">
                  <div className="mb-3">
                    <label>{t.name_label}</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={t.name_placeholder}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label>{t.email_label}</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder={t.email_placeholder}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label>{t.msg_label}</label>
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder={t.msg_placeholder}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-send w-100">
                    <FiSend /> {t.send}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Contact;

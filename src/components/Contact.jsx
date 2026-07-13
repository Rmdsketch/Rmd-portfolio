import { Container } from 'react-bootstrap';
import { AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';
import { FiCopy, FiExternalLink, FiSend } from 'react-icons/fi';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import certificateImages from '../assets/routes/AllCertificate';
import './css/Contact.css';

function Contact() {
  const { t: useT } = useTranslation();
  const t = useT('contact', { returnObjects: true });
  const navT = useT('nav', { returnObjects: true });

  const [alreadyCopy, setAlreadyCopy] = useState("Copy");

  function actionCopy() {
    setAlreadyCopy("Copied!");
    setTimeout(function () {
      setAlreadyCopy("Copy");
    }, 2000);
  }

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const msg = e.target.elements.msg.value;

    const subject = `Inquiry from ${name} via Portfolio`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${msg}`;

    window.location.href = `mailto:ramadani.dev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Muhamad Ramadani - {navT.contact}</title>
        </Helmet>
      </HelmetProvider>
      <Container fluid className="contact-container">
        <div className="contact-title animate__animated animate__zoomIn">
          <h3>{t.title}</h3>
          <h4>
            ───&nbsp;&nbsp;{navT.page} <strong>04</strong>
          </h4>
        </div>

        <div className="contact-content-wrapper animate__animated animate__fadeInUp">
          {/* Column 1: Certifications */}
          <div className="contact-col col-certs">
            {/* <h5 className="cert-title mb-4">{t.cert_title}</h5> */}
            <div className="cert-scroll-list">
              {certificateImages.map((cert, index) => (
                <img
                  key={index}
                  src={cert}
                  alt={`Certificate ${index + 1}`}
                  loading="lazy"
                  className="cert-img-item"
                />
              ))}
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div className="contact-col col-info">
            <div className="contact-info-list">
              <div className="contact-item">
                <h3>
                  <AiOutlineMail /> {t.emailLabel || 'Email'}
                </h3>
                <p>ramadani.dev@gmail.com</p>
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
                  href="https://www.linkedin.com/in/muhamad-ramadani/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-direct"
                >
                  {t.visit || 'Visit'} <FiExternalLink />
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Hire Me Form */}
          <div className="contact-col col-hire">
            <div className="hire-me-card">
              <div className="hire-me-header">
                <h3>{t.form?.send || 'Hire Me'}</h3>
                <p>{t.description}</p>
              </div>
              <form className="hire-me-form" onSubmit={handleEmailSubmit}>
                <div className="mb-3">
                  <label>{t.form?.name || 'Name'}</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Rmdsketch"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label>{t.form?.email || 'Email'}</label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="ramadani.dev@gmail.com"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label>{t.form?.message || 'Message'}</label>
                  <textarea
                    name="msg"
                    className="form-control"
                    placeholder=""
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn-send w-100">
                  <FiSend /> {t.form?.send || 'Send'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Contact;

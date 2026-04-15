import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { AiOutlineLink, AiFillGithub } from 'react-icons/ai';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import './css/Projects.css';
import allProjects from '../assets/routes/AllProject';

function Projects() {
  const { language } = useLanguage();
  const t = translations[language].projects;
  const navT = translations[language].nav;

  const [currentIndexes, setCurrentIndexes] = useState(
    allProjects.map(() => 0)
  );

  const nextImage = (index) => {
    setCurrentIndexes((prev) =>
      prev.map((val, i) =>
        i === index ? (val + 1) % allProjects[index].img.length : val
      )
    );
  };

  const prevImage = (index) => {
    setCurrentIndexes((prev) =>
      prev.map((val, i) =>
        i === index
          ? (val - 1 + allProjects[index].img.length) % allProjects[index].img.length
          : val
      )
    );
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Muhamad Ramadani - {t.title}</title>
        </Helmet>
      </HelmetProvider>

      <Container fluid className="projects-container">
        <div className="projects-title animate__animated animate__zoomIn">
          <h3>{t.title}</h3>
          <h4>
            ───&nbsp;&nbsp;{navT.page} <strong>04</strong>
          </h4>
        </div>

        <div className="projects-wrapper animate__animated animate__slideInRight animate_slower my-4">
          <div className="row">
            {allProjects.map((project, index) => {
              const translatedProject = t.list[index] || { title: project.title, desc: project.description };
              return (
                <div className="col-lg-6 mb-5" key={index}>
                  <div className="project-card border-0 shadow-sm h-100">
                    <div className="imgsec">
                      <img
                        src={project.img[currentIndexes[index]]}
                        alt={translatedProject.title}
                        loading="lazy"
                        className="project-img"
                      />
                      {project.img.length > 1 && (
                        <>
                          <button
                            className="carousel-btn prev"
                            onClick={() => prevImage(index)}
                          >
                            ‹
                          </button>
                          <button
                            className="carousel-btn next"
                            onClick={() => nextImage(index)}
                          >
                            ›
                          </button>
                        </>
                      )}
                    </div>

                    <div className="project-content p-4">
                      <h3>{translatedProject.title}</h3>
                      <p className="description">{translatedProject.desc}</p>

                      <div className="tech-stack-tags mb-4">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="project-buttons">
                        {project.websiteUrl && (
                          <a
                            className={project.maintenence ? 'btn-maintenence' : 'btn-website'}
                            href={project.websiteUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <AiOutlineLink className="project-icon" />
                            &nbsp;&nbsp;{project.maintenence ? 'Maintenance' : 'Website'}
                          </a>
                        )}

                        <a
                          className="btn-github"
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <AiFillGithub className="project-icon" />
                          &nbsp;&nbsp;GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </>
  );
}

export default Projects;

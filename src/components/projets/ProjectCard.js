import React, { useState } from "react";
import { Tag, Modal } from "antd";
import "./projet.scss";
import { projectsData } from "./projectsData";
import { Project } from "./Project";

const stackColors = {
  react: "#61dafb",
  redux: "#764abc",
  router: "#eb4034",
  swagger: "#85ea2d",
  html: "#e44d26",
  css: "#000080",
  sass: "#cc6699",
  "font-awesome": "#3399cc",
};

const ProjectCard = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="card-list">
      {projectsData.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          image={project.image}
          date={project.date}
          stacks={project.stacks}
          githubRepo={project.githubRepo}
          liveSite={project.liveSite}
          description={project.description}
          onClick={() => openModal(project)}
        />
      ))}
      <Modal
        title={selectedProject && selectedProject.title}
        open={modalVisible}
        onCancel={closeModal}
        footer={null}
        className="project-modal"
      >
        {selectedProject && (
          <div>
            <p className="modal-description">{selectedProject.description}</p>
            <div className="technologies">
              {selectedProject.stacks.map((stack, index) => (
                <Tag
                  key={index}
                  style={{
                    backgroundColor: stackColors[stack.toLowerCase()],
                    color: "#ffffff",
                  }}
                  className={`stack-${stack.toLowerCase()}`}
                >
                  {stack}
                </Tag>
              ))}
            </div>
            <p>Période: {selectedProject.date}</p>
            <p className="git-links">
              <a
                href={selectedProject.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </p>
            {selectedProject.liveSite && (
              <p className="git-links">
                <a
                  href={selectedProject.liveSite}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site
                </a>
              </p>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ProjectCard;

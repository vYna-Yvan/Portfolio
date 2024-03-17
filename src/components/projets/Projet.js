import React, { useState } from "react";
import { Card, Tag, Modal } from "antd";
import "./projet.scss";
import argent from "../../assets/images/Argent_bank_home.png";
import kasa from "../../assets/images/Kasa_appt_2.png";
import ohmyfood from "../../assets/images/OhMyFood_home.png";
import debuggevent from "../../assets/images/724event.png";

const { Meta } = Card;

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

const Project = ({
  title,
  image,
  date,
  stacks,
  githubRepo,
  liveSite,
  description,
  onClick,
}) => (
  <Card
    hoverable
    style={{ width: "500px" }} // Ajustement pour la largeur maximale
    cover={<img alt={title} src={image} />}
    onClick={onClick}
  >
    <Meta title={title} description={`Période: ${date}`} />
    <div className="technologies">
      {stacks.map((stack, index) => (
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
    <div className="git-link">
      <a href={githubRepo} target="_blank" rel="noopener noreferrer">
        GitHub Repo
      </a>
      {liveSite && (
        <div>
          <a href={liveSite} target="_blank" rel="noopener noreferrer">
            Live Site
          </a>
        </div>
      )}
    </div>
  </Card>
);

const projectsData = [
  {
    title: "Argent-Bank",
    image: argent,
    date: "02-2024",
    stacks: ["React", "Redux", "Router", "CSS", "Swagger"],
    githubRepo: "https://github.com/vYna-Yvan/Argent-Bank-React",
    liveSite: "",
    description: `Une application bancaire en ligne permettant de gérer vos finances. 
    J'ai complété la création d'une application bancaire en ligne permettant de gérer vos finances. 
    J'ai utilisé React pour son développement, intégré Redux pour sa gestion, et implémenté les fonctionnalités de connexion, 
    déconnexion et visualisation du profil. J'ai suivi les bonnes pratiques de développement et utilisé les routes API déjà disponibles.`,
  },
  {
    title: "724Events Debug",
    image: debuggevent,
    date: "01-2004",
    stacks: ["React", "SASS"],
    githubRepo: "https://github.com/vYna-Yvan/724events",
    liveSite: "",
    description: `Une application de gestion d'événements pour aider les organisateurs à suivre les participants.
    En tant que développeur front-end freelance, j'ai été sollicité par l'agence événementielle 724events pour finaliser la nouvelle version de leur site vitrine.
     Le site avait déjà été complété, mais des bugs persistaient, entravant son bon fonctionnement pour les visiteurs. 
     Jean-Baptiste, le directeur Marketing de l'agence, m'a envoyé le code du site avec une liste de tests unitaires et fonctionnels à effectuer pour détecter les erreurs.
      Après avoir accepté la mission, j'ai examiné le code et suivi les instructions de Jean-Baptiste pour identifier et corriger les problèmes. 
      J'ai également complété le cahier de recette, en ajoutant tous les scénarios nécessaires pour vérifier que le site fonctionne correctement.
      Maintenant que j'ai terminé les tests et les corrections nécessaires, le site devrait être prêt à être publié sans aucun bug gênant.`,
  },
  {
    title: "Kasa",
    image: kasa,
    date: "12-2023",
    stacks: ["React", "Router", "CSS"],
    githubRepo: "https://github.com/username/kasa-repo",
    liveSite: "https://vyna-yvan.github.io/kasa/",
    description: `Une application de location d'appartements pour des séjours courts.
    J'ai rénové le site de Kasa, une entreprise de location d'appartements. 
    J'ai utilisé JavaScript pour le côté technique et React pour le design. 
    Avec les directives de Laura et les maquettes de Paul, j'ai créé une nouvelle interface utilisateur. 
    Après avoir ajouté les annonces de logements, j'ai terminé le projet avec succès.`,
  },
  {
    title: "OhMyFood",
    image: ohmyfood,
    date: "09-2023",
    stacks: ["HTML", "SASS", "Font-Awesome"],
    githubRepo: "https://github.com/vYna-Yvan/OhMyFood",
    liveSite: "https://vyna-yvan.github.io/OhMyFood/",
    description: `Une application de commande de repas en ligne avec des animations attractives.
      J'ai travaillé sur un projet pour Ohmyfood en tant que développeur junior. 
      Notre mission était de créer un site pour afficher les menus des restaurants. 
      Les clients pouvaient composer leur propre menu. Après avoir convaincu 4 restaurateurs de participer, 
      j'ai développé le site en utilisant les maquettes fournies. Maintenant, le projet est terminé.`,
  },
];

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
            <p>
              <a
                href={selectedProject.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            </p>
            {selectedProject.liveSite && (
              <p>
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

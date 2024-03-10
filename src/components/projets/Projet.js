import React from "react";
import { Card, Tag } from "antd";
import "./projet.scss";
import argent from "../../assets/images/Argent_bank_home.png";
import kasa from "../../assets/images/Kasa_appt_2.png";
import ohmyfood from "../../assets/images/OhMyFood_home.png";

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

const Project = ({ title, image, date, stacks, githubRepo, liveSite }) => (
  <Card
    hoverable
    style={{ width: 500 }}
    cover={<img alt={title} src={image} />}
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
    liveSite: "https://example.com/argent-bank",
  },
  {
    title: "Kasa",
    image: kasa,
    date: "01-2024",
    stacks: ["React", "Router", "CSS"],
    githubRepo: "https://github.com/username/kasa-repo",
    liveSite: "https://example.com/kasa",
  },
  {
    title: "OhMyFood",
    image: ohmyfood,
    date: "09-2023",
    stacks: ["HTML", "SASS", "Font-Awesome"],
    githubRepo: "https://github.com/vYna-Yvan/OhMyFood",
    liveSite: "https://vyna-yvan.github.io/OhMyFood/",
  },
  {
    title: "OhMyFood",
    image: ohmyfood,
    date: "09-2023",
    stacks: ["HTML", "SASS", "Font-Awesome"],
    githubRepo: "https://github.com/vYna-Yvan/OhMyFood",
    liveSite: "https://vyna-yvan.github.io/OhMyFood/",
  },
];

const ProjectCard = () => (
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
      />
    ))}
  </div>
);

export default ProjectCard;

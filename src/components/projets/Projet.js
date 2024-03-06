import React from "react";
import "./projet.scss";
import { Card, Tag } from "antd";
import argent from "../../assets/images/Argent_bank_home.png";
import kasa from "../../assets/images/Kasa_appt_2.png";

const { Meta } = Card;

const Project = ({ title, image, date, technologies, githubRepo }) => (
  <Card
    hoverable
    style={{ width: 500 }}
    cover={<img alt={title} src={image} />}
  >
    <Meta title={title} description={`Date: ${date}`} />
    <div className="technologies">
      {technologies.map((tech, index) => (
        <Tag key={index} className={`tech-${tech.toLowerCase()}`}>
          {tech}
        </Tag>
      ))}
    </div>
    <div>
      <a href={githubRepo} target="_blank" rel="noopener noreferrer">
        GitHub Repo
      </a>
    </div>
  </Card>
);

const projectsData = [
  {
    title: "Argent-Bank",
    image: argent,
    date: "2022-03-06",
    technologies: ["React", "Redux"],
    githubRepo: "https://github.com/username/argent-bank-repo",
  },
  {
    title: "Kasa",
    image: kasa,
    date: "2022-03-07",
    technologies: ["React"],
    githubRepo: "https://github.com/username/kasa-repo",
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
        technologies={project.technologies}
        githubRepo={project.githubRepo}
      />
    ))}
  </div>
);

export default ProjectCard;

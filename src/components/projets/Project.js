import React from "react";
import { Card, Tag } from "antd";
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

export const Project = ({
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
    <div className="project-link repoGit-link">
      <a href={githubRepo} target="_blank" rel="noopener noreferrer">
        Repository
      </a>
      {liveSite && (
        <div className="project-link liveSite-link">
          <a href={liveSite} target="_blank" rel="noopener noreferrer">
            Live Site
          </a>
        </div>
      )}
    </div>
  </Card>
);

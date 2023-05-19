import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import SBSC from "../../Assets/Projects/Screenshot 2023-05-20 032448.png";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={SBSC}
              title="SBSCMUN Society"
            description="This is a fully functional website that uses React.js and CSS in the front end and NodeJs and express js in backend.It is a freelancing project that i got through Linkedin"
              ghLink="https://github.com/KushagraVarshney05/SBSC-MUN"
              demoLink="https://sbscmun.in/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Portfolio Website"
              description="My personal Portfolio Website build with React and Bootstrap. It is fully responsive website which supports both dark and light mode."
              ghLink="https://github.com/rahuljha4171/Portfolio-Website"
              demoLink="https://rahuljha.tech/"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;

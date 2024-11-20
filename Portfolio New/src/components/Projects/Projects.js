import React from "react";
import { Container , Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import graph from '../../Assets/Projects/path.png';
import article from '../../Assets/Projects/article.png'
import sort from '../../Assets/Projects/sort.png'
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
             <ProjectCard
              imgPath={graph}
              title="Graph Visualizer"
              description=" Path Visualizer revolutionizes algorithm learning, boosting comprehension by 40%. Dive into interactive exploration, unravel intricate paths, and master algorithms effortlessly.Elevate your understanding with this indispensable tool for algorithm enthusiasts."
              ghLink="https://path-visualizer-pep.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
             <ProjectCard
              imgPath={article}
              title="Article Generator"
              description="Transform content creation with an innovative Article Generator website powered by OpenAI API. Experience effortless article generation, boosting productivity and enhancing your online presence. Elevate your writing with AI-driven content."
              ghLink="https://article-generator-pep.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
             <ProjectCard
              imgPath={sort}
              title="Sorting Visualizer"
              description="Experience an enhanced comprehension of sorting algorithms through our Sorting Visualizer. Dive into the dynamic realm of sorting processes, grasp intricate patterns, and elevate the learning experience, achieving a 50% increase in understanding"
              ghLink="https://sorting-visualizer-pep.netlify.app/"
            />
          </Col>
          </Row>
      </Container>
    </Container>
  );
}

export default Projects;

/* 

<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
             <ProjectCard
              imgPath={chatify}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"      
            />
          </Col>

        </Row> 

*/
import { Tools, Github } from "react-bootstrap-icons";
import Project from "./Project";

function Projects() {
  return (
    <>
      <div className="hero bg-base-200 py-36">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <Tools className="text-5xl mb-4 mx-auto"></Tools>
            <h1 className="text-5xl font-bold baskervville">Projects</h1>
            <p className="py-6">
              Here are some of the projects I've been working on recently. I
              mostly work with React, TypeScript, and Node.
            </p>
            <a href="https://github.com/sam-neale" className="btn btn-neutral">
              <Github></Github> Follow me on GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="bg-primary text-primary-content p-12 text-center">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center">
          <Project
            title="React Loader Continued"
            description="Continued development of a React full page loading modal with spinners and random custom text."
            link="https://github.com/Sam-Neale/react-loader-continued"
            image={null}
          />
        </div>
      </div>
    </>
  );
}

export default Projects;

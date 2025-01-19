import "./app.css";
import Nav from "./sections/nav";
import Footer from "./sections/footer";
import { Tools, Github } from "react-bootstrap-icons";

function Projects() {
  return (
    <div className="bg-base-200" data-theme="pastel">
      <Nav active={"projects"}></Nav>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <Tools className="text-5xl mb-4 mx-auto"></Tools>
            <h1 className="text-5xl font-bold baskervville">Projects</h1>
            <p className="py-6">
              I took a break from developing for a while, but now I'm getting
              back into it. I'm excited to dive into new projects and continue
              learning and growing as a developer. Stay tuned for updates on my
              latest work!
            </p>
            <a href="https://github.com/sam-neale" className="btn btn-neutral">
              <Github></Github> Follow me on GitHub
            </a>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Projects;

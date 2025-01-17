import "./app.css";
import { StaticRouter, Route, Routes } from "react-router-dom";
import cover from "./cover";
import projects from "./projects";
import captured from "./captured";

function App() {
  return (
    <>
      <StaticRouter location={window.location.pathname}>
        <div>
          <Routes>
            <Route path="/" Component={cover} />
            <Route path="/projects" Component={projects} />
            <Route path="/captured" Component={captured} />
          </Routes>
        </div>
      </StaticRouter>
    </>
  );
}

export default App;

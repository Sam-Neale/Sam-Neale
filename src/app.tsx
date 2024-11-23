import "./app.css";
import { StaticRouter, Route, Routes } from "react-router-dom";
import cover from "./cover";
import projects from "./projects";
import soria from "./soria";

function App() {
  return (
    <>
      <StaticRouter location={window.location.pathname}>
        <div>
          <Routes>
            <Route path="/" Component={cover} />
            <Route path="/projects" Component={projects} />
            <Route path="/soria" Component={soria} />
          </Routes>
        </div>
      </StaticRouter>
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./assets/styles/fonts.css";
import "./App.css";

import Home from "./home/Main";
import Projects from "./projects/Main";
import Captured from "./captured/Main";

function PageSelector(props: { page: string }) {
  switch (props.page) {
    case "projects":
      return <Projects />;
    case "captured":
      return <Captured />;
    default:
      return <Home />;
  }
}

function App() {
  const [page, setPage] = useState<string>("");

  // Check if there is a page is in the query params
  useEffect(() => {
    if (window.location.search) {
      const urlParams = new URLSearchParams(window.location.search);
      setPage(urlParams.get("page") || "");
    }
  }, [setPage]);

  return (
    <div style={{ overflowY: "hidden" }} className="flex h-screen flex-col">
      <div className="flex-none">
        <Navbar page={page} setPage={setPage} />
      </div>
      <div className="grow bg-primary" style={{ overflowY: "auto" }}>
        <PageSelector page={page} />
      </div>
      <div className="flex-none">
        <Footer />
      </div>
    </div>
  );
}

export default App;

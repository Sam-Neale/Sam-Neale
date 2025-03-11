import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./assets/styles/fonts.css";
import "./App.css";

function App() {
  const [page, setPage] = useState<string>("");

  // Check if there is a page is in the query params
  if (window.location.search) {
    const urlParams = new URLSearchParams(window.location.search);
    setPage(urlParams.get("page") || "");
  }

  return (
    <div style={{ overflowY: "hidden" }} className="flex h-screen flex-col">
      <div className="flex-none">
        <Navbar page={page} setPage={setPage} />
      </div>
      <div className="grow" style={{ backgroundColor: "red" }}>
        abc
      </div>
      <div className="flex-none">
        <Footer />
      </div>
    </div>
  );
}

export default App;

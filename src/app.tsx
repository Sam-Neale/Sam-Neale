import { useState } from "react";
import Navbar from "./components/Navbar";
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
    <>
      <Navbar page={page} />
    </>
  );
}

export default App;

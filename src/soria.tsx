import "./app.css";
import Nav from "./sections/nav";
import Footer from "./sections/footer";
import { Camera, Instagram } from "react-bootstrap-icons";

function Soria() {
  return (
    <div className="bg-base-200" data-theme="retro">
      <Nav active={"photography"}></Nav>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <Camera className="text-5xl mb-4 mx-auto" />
            <h1 className="text-5xl font-bold baskervville">Soria</h1>
            <p className="py-6">
              Soria is my photography side project. I mostly post photos taken
              from around Victoria, Australia, including my home city of
              Melbourne.
            </p>
            <a
              href="https://github.com/sam-neale"
              className="btn btn-secondary"
            >
              <Instagram /> Follow me on Instagram
            </a>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Soria;

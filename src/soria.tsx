import "./app.css";
import Nav from "./sections/nav";
import Footer from "./sections/footer";
import { Camera, Instagram } from "react-bootstrap-icons";
import image1 from "./assets/soria/IMG_1689.jpeg";
import image2 from "./assets/soria/IMG_2093.jpeg";
import image3 from "./assets/soria/IMG_2160.jpeg";
import image4 from "./assets/soria/IMG_3919.jpeg";

function Soria() {
  return (
    <div className="bg-base-200" data-theme="retro">
      <Nav active={"soria"}></Nav>
      <div className="hero bg-base-200 py-12">
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
              href="https://www.instagram.com/photo_soria/"
              className="btn btn-secondary"
            >
              <Instagram /> Follow me on Instagram
            </a>
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className="carousel w-full max-h-screen min-h-screen">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={image1}
            className="w-full"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={image2}
            className="w-full"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={image3}
            className="w-full"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={image4}
            className="w-full"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Soria;

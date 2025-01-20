import "./app.css";
import Nav from "./sections/nav";
import Footer from "./sections/footer";
import { Camera, Instagram } from "react-bootstrap-icons";
import image1 from "./assets/captured/IMG_1689.jpeg";
import image2 from "./assets/captured/IMG_4064.jpeg";
import image3 from "./assets/captured/IMG_4063.jpeg";
import image4 from "./assets/captured/IMG_3919.jpeg";

function Captured() {
  return (
    <div className="bg-base-200" data-theme="pastel">
      <Nav active={"captured"}></Nav>
      <div className="hero bg-base-200 py-12">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <Camera className="text-5xl mb-4 mx-auto" />
            <h1 className="text-5xl font-bold montserrat">
              Captured <br />
              <span className="text-3xl font-normal">by Sam</span>
            </h1>
            <p className="py-6">
              Captured is my photography side project. I mostly post photos
              taken from around Victoria, Australia, including my home city of
              Melbourne.
            </p>
            <a
              href="https://www.instagram.com/captured_by.sam/"
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

export default Captured;

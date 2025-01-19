import Mac from "./../assets/memojis/mac.png";
import { Github } from "react-bootstrap-icons";

function Software() {
  return (
    <div className="hero min-h-screen bg-neutral text-neutral-content">
      <div className="hero-content flex-col lg:flex-row">
        <img src={Mac} className="max-w-sm hidden lg:block rounded-lg" />
        <div className="lg:m-0">
          <h1 className="text-7xl baskervville" style={{ fontWeight: 900 }}>
            I Write Code
          </h1>
          <p></p>
          <br />
          <a href="https://github.com/sam-neale" className="link">
            <div className="join">
              <Github size={24} />
              <span className="px-3 inria-serif font-bold underline underline-offset-3">
                Visit My Github
              </span>
            </div>
          </a>
          <br />
          <h3 className="text-lg font-bold">Languages</h3>
          <div className="carousel carousel-center rounded-box">
            <div className="carousel-item">
              <img
                src="https://img.shields.io/badge/swift-F54A2A?style=for-the-badge&logo=swift&logoColor=white"
                alt="Swift"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
                alt="Typescript"
              />
            </div>

            <div className="carousel-item">
              <img
                src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
                alt="HTML5"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
                alt="CSS"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
                alt="JS"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white"
                alt="Markdown"
              />
            </div>
          </div>
          <br />
          <h3 className="text-lg font-bold">
            Frameworks, Platforms and Libraries
          </h3>
          <div className="carousel carousel-center rounded-box">
            <div className="carousel-item">
              <img
                src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
                alt="Node.JS"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"
                alt="React"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"
                alt="ReactRouter"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.shields.io/badge/daisyui-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white"
                alt="DaisyUI"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
                alt="TailwindCSS"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.shields.io/badge/Electron-191970?style=for-the-badge&logo=Electron&logoColor=white"
                alt="Electron"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
                alt="Express"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white"
                alt="Bootstrap"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE"
                alt="Insomnia"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white"
                alt="NPM"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD"
                alt="Nodemon"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101"
                alt="Socket.io"
              />
            </div>
          </div>
          <br />
          <h3 className="text-lg font-bold">Browsers</h3>
          <div className="carousel carousel-center rounded-box">
            <div className="carousel-item">
              <img
                src="https://img.shields.io/badge/Safari-000000?style=for-the-badge&logo=Safari&logoColor=white"
                alt="Safari"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white"
                alt="Chrome"
              />
            </div>
          </div>
          <br />
          <h3 className="text-lg font-bold">Operating Systems</h3>
          <div className="carousel carousel-center rounded-box">
            <div className="carousel-item">
              <img
                src="https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=ios&logoColor=white"
                alt="iOS"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=macos&logoColor=F0F0F0"
                alt="MacOS"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white"
                alt="Ubuntu"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.shields.io/badge/Apple-%23000000.svg?style=for-the-badge&logo=apple&logoColor=white"
                alt="Apple"
              />
            </div>
          </div>
          <br />
          <h3 className="text-lg font-bold">Hosting Providers</h3>
          <div className="carousel carousel-center rounded-box">
            <div className="carousel-item">
              <img
                src="https://img.shields.io/badge/DigitalOcean-%230167ff.svg?style=for-the-badge&logo=digitalOcean&logoColor=white"
                alt="Digital Ocean"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white"
                alt="Github"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase"
                alt="Firebase"
              />
            </div>
          </div>
          <br />
          <h3 className="text-lg font-bold">Databases</h3>
          <div className="carousel carousel-center rounded-box">
            <div className="carousel-item">
              <img
                src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"
                alt="Pizza"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white"
                alt="Pizza"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white"
                alt="Pizza"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.shields.io/badge/strapi-%232E7EEA.svg?style=for-the-badge&logo=strapi&logoColor=white"
                alt="Pizza"
              />
            </div>
          </div>
          <br />
          <h3 className="text-lg font-bold">IDEs</h3>
          <div className="carousel carousel-center rounded-box">
            <div className="carousel-item">
              <img
                src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"
                alt="Pizza"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.shields.io/badge/Xcode-007ACC.svg?style=for-the-badge&logo=Xcode&logoColor=white"
                alt="Pizza"
              />
            </div>
          </div>
          <br />
          <h3 className="text-lg font-bold">ORMs</h3>
          <div className="carousel carousel-center rounded-box">
            <div className="carousel-item">
              <img
                src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white"
                alt="Pizza"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white"
                alt="Pizza"
              />
            </div>
          </div>
          <br />
          <h3 className="text-lg font-bold">Version Control</h3>
          <div className="carousel carousel-center rounded-box">
            <div className="carousel-item">
              <img
                src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
                alt="Pizza"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"
                alt="Pizza"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.shields.io/badge/gitlab-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white"
                alt="Pizza"
              />
            </div>
          </div>
          <br />
          <h3 className="text-lg font-bold">Design Software</h3>
          <div className="carousel carousel-center rounded-box">
            <div className="carousel-item">
              <img
                src="https://img.shields.io/badge/Adobe%20XD-470137?style=for-the-badge&logo=Adobe%20XD&logoColor=#FF61F6"
                alt="Pizza"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white"
                alt="Pizza"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.shields.io/badge/Dribbble-EA4C89?style=for-the-badge&logo=dribbble&logoColor=white"
                alt="Pizza"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Software;

import wave from "../assets/memojis/wave.png";
import { Github, CloudLightningFill, KeyFill } from "react-bootstrap-icons";

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
        <img width="36" height="36" className="fill-current" src={wave} />
        <p>
          Copyright © Sam Neale {new Date().getFullYear()} - All right reserved
        </p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="/pgpPublic.asc" className="italic">
          <KeyFill size={24} className="inline-block me-1" />
          PGP Public Key
        </a>
        <a href="https://bsky.app/profile/samneale.dev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 600 530"
            className="fill-current"
          >
            <path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z" />
          </svg>
        </a>
        <a href="https://github.com/sam-neale">
          <Github size={24} />
        </a>
        <a href="https://www.flashes.blue/profile/samneale.dev">
          <CloudLightningFill size={24} />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;

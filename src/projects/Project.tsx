import { Github } from "react-bootstrap-icons";

function Project(props: {
  title: string;
  description: string;
  link: string;
  image: string | null;
}) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      {props.image && (
        <figure className="px-10 pt-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
      )}
      <div className="card-body items-center text-base-content text-center">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.description}</p>
        <div className="card-actions">
          <a href={props.link} className="btn btn-primary">
            <Github /> View Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;

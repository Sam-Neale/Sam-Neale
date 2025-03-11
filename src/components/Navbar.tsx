import { Camera, CodeSlash, EnvelopeAtFill } from "react-bootstrap-icons";

function navigate(page: string, setPage: (page: string) => void) {
  const url = new URL(window.location.href);
  url.searchParams.set("page", page);
  window.history.pushState({}, "", url.toString());

  setPage(page);
}

function Navbar(props: { page: string; setPage: (page: string) => void }) {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a
                  className={props.page == "projects" ? "fw-bold" : ""}
                  onClick={() => navigate("projects", props.setPage)}
                >
                  <CodeSlash /> Projects
                </a>
              </li>
              <li>
                <a
                  className={props.page == "captured" ? "fw-bold" : ""}
                  onClick={() => navigate("captured", props.setPage)}
                >
                  <Camera /> Captured
                </a>
              </li>
            </ul>
          </div>

          <ul className="menu menu-horizontal px-1">
            <li>
              <a
                className={
                  props.page == "projects"
                    ? "bg-neutral mx-2 text-neutral-content font-bold"
                    : "mx-2"
                }
                onClick={() => navigate("projects", props.setPage)}
              >
                <CodeSlash /> Projects
              </a>
            </li>
            <li>
              <a
                className={
                  props.page == "captured"
                    ? "bg-neutral mx-2 text-neutral-content font-bold"
                    : "mx-2"
                }
                onClick={() => navigate("captured", props.setPage)}
              >
                <Camera /> Captured
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-center hidden lg:flex">
          <a
            onClick={() => navigate("", props.setPage)}
            className="btn btn-ghost text-3xl baskervville fw-bold"
          >
            Sam Neale
          </a>
        </div>
        <div className="navbar-end">
          <button
            className="btn btn-primary"
            onClick={() =>
              (document.getElementById(
                "contactModal"
              ) as HTMLDialogElement)!.showModal()
            }
          >
            <EnvelopeAtFill />
            Contact Me
          </button>
        </div>
      </div>
      <dialog id="contactModal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">How to Contact Me</h3>
          <p className="py-4">
            Email me at{" "}
            <a
              className="link link-info font-bold"
              href="mailto:me@samneale.dev"
            >
              me@samneale.dev
            </a>
            . I'm open to project commissions, inquiries, collaborations, or any
            software-related questions. Looking forward to hearing from you!
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default Navbar;

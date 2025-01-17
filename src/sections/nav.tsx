function Nav({ active = null }: { active: string | null }) {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a
              className={
                "inria-serif font-medium " +
                (active == "projects" ? "active" : "")
              }
              href="/projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className={
                "inria-serif font-mediu " +
                (active == "captured" ? "active" : "")
              }
              href="/captured"
            >
              Captured
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/captured">Captured</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-3xl baskervville" href="/">
          Sam Neale
        </a>
      </div>
      <div className="navbar-end">
        <button
          className="btn"
          onClick={() => {
            const modal = document.getElementById("contactModal");
            if (modal) {
              (modal as HTMLDialogElement).showModal();
            }
          }}
        >
          Contact
        </button>
        <dialog
          id="contactModal"
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box">
            <h3 className="font-black text-xl inria-serif">Send Me An Email</h3>
            <p className="py-4 text-lg inria-serif">
              Reach out by sending an email:{" "}
              <a className="link link-primary" href="mailto:me@samneale.dev">
                me@samneale.dev
              </a>
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}

export default Nav;

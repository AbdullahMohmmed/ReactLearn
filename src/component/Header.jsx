import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg  mb-5">
      <div className="container-fluid">
       <a href="/"> <img id="navlogo" src="images/cofff.svg" alt="" /></a>
        <a   className="navbar-brand" href="/">
          <span id="spanav">
            <strong>Café Matinal</strong>
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <Link
              to="/"
              className="nav-item"
              style={{ textDecoration: "none" }}
            >
              <span className="nav-link active" aria-current="page">
                <span id="spanav">
                  <strong> Home</strong>
                </span>
              </span>
            </Link>
            <Link
              to="contacts"
              className="nav-item "
              style={{ textDecoration: "none" }}
            >
              <span className="nav-link" href="contacts">
                <span id="spanav">
                  <strong>Contact</strong>
                </span>
              </span>
            </Link>
            <Link
              to="store"
              className="nav-item"
              style={{ textDecoration: "none" }}
            >
              <span className="nav-link" href="store">
                <span id="spanav">
                  <strong>Store</strong>
                </span>
              </span>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Header;

import { NavLink, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem(process.env.REACT_APP_AUTH);
  const split = token.split(" ")[1];
  const { username } = jwtDecode(split);

  const logout = () => {
    localStorage.removeItem(process.env.REACT_APP_AUTH);
    navigate("/sign-in", { replace: true });
  };

  const displayButton =
    split !== undefined ? (
      <button className="btn btn-primary" type="button" onClick={() => logout()}>
        {username}
      </button>
    ) : (
      <NavLink to="sign-in" className="btn btn-primary" type="button">
        Login
      </NavLink>
    );

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
          </ul>
          <section className="d-flex">{displayButton}</section>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

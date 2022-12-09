import { Outlet, Link } from "react-router-dom";
import React from "react";
import { FaCartPlus, FaHome } from "react-icons/fa";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-light bg-dark px-sm-5">
        <Link to="/" className="text-decoration-none text-white">
          SOLITON BAZAAR
        </Link>

        <ul className="d-flex flex-row-reverse bd-highlight m-2">
          <li>
            <Link to="/cart" className="p-2 text-decoration-none text-white">
              <FaCartPlus style={{ fontSize: "30px" }} />
              <span className="position-absolute top-0 start-150">0</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="p-2 text-decoration-none text-white px-5">
              <FaHome style={{ fontSize: "30px" }} />
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default NavBar;

import { Outlet, Link } from "react-router-dom";
import React, { useContext } from "react";
import { FaCartPlus, FaHome } from "react-icons/fa";
import { CartContext } from "../App";

function NavBar() {
  const { cartProducts } = useContext(CartContext);

  return (
    <>
      <nav className="navbar navbar-light bg-dark px-sm-5">
        <Link to="/" className="text-decoration-none text-white">
          SOLITON BAZAAR
        </Link>

        <ul className="d-flex flex-row-reverse bd-highlight m-2">
          <li>
            <Link to="/cart" className="p-2 text-decoration-none text-white">
              <FaCartPlus className="fs-2" />
              <span className="position-absolute top-0 start-150">
                {cartProducts ? cartProducts.length : 0}
              </span>
            </Link>
          </li>
          <li>
            <Link to="/" className="p-2 text-decoration-none text-white px-5">
              <FaHome className="fs-2" />
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default NavBar;

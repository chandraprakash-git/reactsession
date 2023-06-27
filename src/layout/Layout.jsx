import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      {children}
      {/* <Outlet /> */}
      <footer>this is footer</footer>
    </>
  );
};

export default Layout;

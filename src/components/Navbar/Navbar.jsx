import React from "react";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-wgite py-3 shadow-sm ">
        <div class="container">
          <a class="navbar-brand fs-3 text-dark" href="#">
            Shopping-Cart
          </a>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link text-dark fs-5" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-secondary fs-5" href="#">
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-secondary fs-5" href="#">
                  Contact Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-secondary fs-5" href="#">
                  Cart
                </a>
              </li>
            </ul>
            <div className="buttons">
              <a href="#" className="btn btn-outline-dark">
                <i class="fa fa-sign-in me-1"></i>Login
              </a>

              <a href="#" className="btn btn-outline-dark ms-2">
                <i class="fa fa-user-plus me-1"></i>Register
              </a>

              <a href="#" className="btn btn-outline-dark ms-2">
                <i class="fa fa-shopping-cart me-1"></i>Cart (0)
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

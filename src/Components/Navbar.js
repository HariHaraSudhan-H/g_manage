import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/navbar.module.css"
const Navbar = () => {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <Link className="navbar-item" to="/">
          <h1 style={{ fontWeight: 800, fontSize: "1.75rem" }}>
            <img className={styles.navbar_brand_img}src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-easy-access-of-spreadsheet-to-manage-data-on-a-smartphone-development-shadow-tal-revivo.png" />
            Manage
          </h1>
        </Link>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="menuOption"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="menuOption" class="navbar-menu">
        {/* <div class="navbar-start">
          <a class="navbar-item">Home</a>

          <a class="navbar-item">Documentation</a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">More</a>

            <div class="navbar-dropdown">
              <a class="navbar-item">About</a>
              <a class="navbar-item">Jobs</a>
              <a class="navbar-item">Contact</a>
              <hr class="navbar-divider" />
              <a class="navbar-item">Report an issue</a>
            </div>
          </div>
        </div> */}

        <div class="navbar-end">
          <div class="navbar-item">
            <button className="button">
              <img
                src="https://img.icons8.com/material-rounded/24/add.png"
                alt="Add Image"
                className={styles.addButtonImg}
              />{" "}
              Add
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/navbar.module.css";
const Navbar = (props) => {
  const handleAddOption = (e) => {
    e.preventDefault();
    props.setCreateMode(true);
    document.getElementById("main").style.filter = "blur(4px)";
    console.log(props.createMode);
  };
  return (
    <nav class="navbar" className={styles.navItems} role="navigation" aria-label="main navigation">
      <div class="navbar-brand" >
        <Link className="navbar-item" to="/">
          <h1 style={{ fontWeight: 800, fontSize: "1.75rem" }}>
            <img
              className={styles.navbar_brand_img}
              src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-easy-access-of-spreadsheet-to-manage-data-on-a-smartphone-development-shadow-tal-revivo.png"
              alt="logo"
            />
            Manage
          </h1>
        </Link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <button className="button" onClick={handleAddOption}>
            <img
              src="https://img.icons8.com/material-rounded/24/add.png"
              alt="Add Icon"
              className={styles.addButtonImg}
            />{" "}
            Add
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

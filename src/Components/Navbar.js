import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../Styles/navbar.module.css";
const Navbar = (props) => {
  const location = useLocation();

  // Handles addition of appointment button click
  const handleAddOption = (e) => {
    e.preventDefault();
    props.setCreateMode(true);
    document.getElementById("main").style.filter = "blur(4px)";
  };
  return (
    <nav
      className={`navbar ${styles.navItems}`}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
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
      <div className={`navbar-end ${styles.navbarEnd}`}>
        {location.pathname === "/" ? (
          <div className="navbar-item">
            <button className="button" onClick={handleAddOption}>
              <img
                src="https://img.icons8.com/material-rounded/24/add.png"
                alt="Add Icon"
                className={styles.addButtonImg}
              />{" "}
              <span className={styles.captionButton}>Add</span>
            </button>
          </div>
        ) : (
          <></>
        )}
        <div className="navbar-item">
          {location.pathname === "/" ? (
            <Link className="button" to="/calendar">
              <img
                src="https://img.icons8.com/color/48/calendar--v1.png"
                alt="Calender Icon"
                className={styles.addButtonImg}
              />{" "}
              <span className={styles.captionButton}>View</span>
            </Link>
          ) : (
            <Link className="button" to="/">
              <img
                src="https://img.icons8.com/material-outlined/24/home--v2.png"
                alt="Calender Icon"
                className={styles.addButtonImg}
              />{" "}
              <span className={styles.captionButton}>Home</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

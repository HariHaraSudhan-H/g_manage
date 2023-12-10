import React, { useState } from "react";
import { connect } from "react-redux";
import { updateEditMode, updateList, updateNotification } from "../Redux/Actions";
import styles from "../Styles/main.module.css";
import { Alert, Snackbar } from "@mui/material";

const Client = (props) => {
  const { data, date, dispatch } = props;
  const handleDelete = (id) => {
    const list = props.list.filter((client) => client.id !== id);
    dispatch(
      updateNotification({
        open: true,
        message:"Appointment deleted successfully",
        severity:"success"
      })
    );
    dispatch(updateList(list));
  };

  const handleEdit = (id) => {
    document.getElementById("main").style.filter = "blur(4px)";
    dispatch(updateEditMode(true, id));
  };

  return (
    <div className={styles.userContainer}>
      <div className={styles.userDateContainer}>
        <div>{date.getDate()}</div>
        <div>
          {date.toLocaleString("default", { month: "long" }).slice(0, 3)}
        </div>
      </div>
      <div className={styles.userInfoContainer}>
        <div cl>
          {data.firstname} {data.lastname}
        </div>
        <div className={styles.userAppDetails}>
          <span className={styles.locationDetails}>
            <img
              src="https://img.icons8.com/ios-glyphs/30/FA5252/marker--v1.png"
              alt="location pin"
            />
            {data.location}
          </span>
          <span className={styles.timeDetails}>
            <img
              src="https://img.icons8.com/ios-glyphs/30/40C057/time--v1.png"
              alt="timeIcon"
            />
            {data.time}
          </span>
          <span className={styles.timeDetails}>
            <img src="https://img.icons8.com/color/48/age.png" alt="ageImage" width="48" height="48"/>
            {data.age}</span>
        </div>
      </div>
      <div>
        <button
          className={styles.editButton}
          onClick={(e) => {
            handleEdit(data.id);
          }}
        >
          <img
            src="https://img.icons8.com/ios-glyphs/30/40C057/edit.png"
            alt="editIcon"
          />
        </button>
        <button
          className={styles.deleteButton}
          onClick={() => handleDelete(data.id)}
        >
          <img
            src="https://img.icons8.com/ios-glyphs/30/FA5252/filled-trash.png"
            alt="deleteIcon"
          />
        </button>
      </div>
    </div>
  );
};

const callback = (state) => {
  console.log(state);
  return {
    ...state,
  };
};

export default connect(callback)(Client);

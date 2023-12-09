import React, { useState } from "react";
import styles from "../Styles/main.module.css";
import {
  updateEditMode,
  updateList,
  updateTodayList,
  updateUpcomingList,
} from "../Redux/Actions";
import { todayDate } from "./App";
import { connect } from "react-redux";
import { Link, redirect } from "react-router-dom";

const Client = (props) => {
  const { data, date, dispatch } = props;
  const handleDelete = (id) => {
    const list = props.list.filter((client) => client.id !== id);
    dispatch(updateList(list));
  };

  const handleEdit = (id) => {
    dispatch(updateEditMode(true,id));
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
                <img src="https://img.icons8.com/ios-glyphs/30/FA5252/marker--v1.png" />
                {data.location}
              </span>
              <span className={styles.timeDetails}>
                <img src="https://img.icons8.com/ios-glyphs/30/40C057/time--v1.png" />
                {data.time}
              </span>
            </div>
            {/* <span>{data.age}</span> */}
          </div>
          <div>
            <button
              className={styles.editButton}
              onClick={(e) => {
                handleEdit(data.id);
              }}
            >
              <img src="https://img.icons8.com/ios-glyphs/30/40C057/edit.png" />
            </button>
            <button
              className={styles.deleteButton}
              onClick={() => handleDelete(data.id)}
            >
              <img src="https://img.icons8.com/ios-glyphs/30/FA5252/filled-trash.png" />
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

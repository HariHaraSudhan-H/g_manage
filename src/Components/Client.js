import React, { useState } from "react";
import styles from "../Styles/main.module.css";

const Client = (props) => {
  const [editMode, setEditMode] = useState(false);
  const { data, date } = props;
  return (
    <div className={styles.userContainer}>
      {editMode ? (
        <>
          <div className={styles.userInfoContainer}>
            <div className={styles.nameFields}>
              <input
                class="input"
                type="text"
                placeholder="First Name"
                value={data.firstname}
              />
              <input
                class="input"
                type="text"
                placeholder="Last Name"
                value={data.lastname}
              />
            </div>
            <div className={styles.userAppDetails}>
              <input class="input" type="date" />
              <div className={styles.locationDetails}>
                <img src="https://img.icons8.com/ios-glyphs/30/FA5252/marker--v1.png" />
                <input
                  class="input"
                  type="text"
                  placeholder="Location"
                  value={data.location}
                />
              </div>
              <div className={styles.timeDetails}>
                <img src="https://img.icons8.com/ios-glyphs/30/40C057/time--v1.png" />
                <div class="select">
                  <select>
                    <option>Time</option>
                    <option>8-9AM</option>
                    <option>9-10AM</option>
                    <option>11-12PM</option>
                    <option>12-1PM</option>
                    <option>4-5PM</option>
                    <option>5-6PM</option>
                    <option>6-7PM</option>
                    <option>7-8PM</option>
                    <option>8-9PM</option>
                  </select>
                </div>
              </div>
            </div>
            {/* <span>{data.age}</span> */}
          </div>
          <div>
            <button
              onClick={(e) => {
                setEditMode(false);
              }}
            >
              <img src="https://img.icons8.com/ios-glyphs/30/40C057/save.png" />
            </button>
          </div>
        </>
      ) : (
        <>
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
              onClick={(e) => {
                setEditMode(true);
              }}
            >
              <img src="https://img.icons8.com/ios-glyphs/30/40C057/edit.png" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Client;

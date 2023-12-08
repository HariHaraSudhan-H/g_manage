import React, { useState } from "react";
import styles from "../Styles/main.module.css";
import {
  updateList,
  updateTodayList,
  updateUpcomingList,
} from "../Redux/Actions";
import { todayDate } from "./App";
import { connect } from "react-redux";

const Client = (props) => {
  const [editMode, setEditMode] = useState(false);
  const { data, date, dispatch } = props;
  const [firstName, setFirstName] = useState(data.firstName);
  const [secondName, setSecondName] = useState(data.lastname);
  const [age, setAge] = useState(data.age);
  const [location, setLocation] = useState(data.location);
  const [appdate, setDate] = useState(data.date);
  const [time, setTime] = useState(data.time);
  const handleDelete = (id) => {
    const list = props.list.filter((client) => client.id !== id);

    dispatch(updateList(list));
    if (
      data.date.toString() ===
      `${todayDate.getFullYear()}-${todayDate.getMonth() + 1}-${(
        "0" + todayDate.getDay()
      ).slice(-2)}`.toString()
    ) {
      const todayList = props.todayAppointments.filter(
        (client) => client.id !== id
      );
      dispatch(updateTodayList(todayList));
    } else {
      const upcomingList = props.upcomingAppointments.filter(
        (client) => client.id !== id
      );
      dispatch(updateUpcomingList(upcomingList));
    }
  };

  const handleEdit = (id) => {
    setEditMode(true);
  };

  const handleSave = (id)=>{
    props.list.map((client)=>{
      if(client.id===id){
        const newData = {
          id: data.id,
          firstname: firstName,
          lastname: secondName,
          age: age,
          location: location,
          date: date,
          time: time,
        };


      }
    })
    setEditMode(false);
  }

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
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <input
                class="input"
                type="text"
                placeholder="Last Name"
                value={data.lastname}
                onChange={(e) => {
                  setSecondName(e.target.value);
                }}
              />
            </div>
            <div className={styles.userAppDetails}>
              <input
                class="input"
                type="date"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
              <div className={styles.locationDetails}>
                <img src="https://img.icons8.com/ios-glyphs/30/FA5252/marker--v1.png" />
                <input
                  class="input"
                  type="text"
                  placeholder="Location"
                  value={data.location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                />
              </div>
              <div className={styles.timeDetails}>
                <img src="https://img.icons8.com/ios-glyphs/30/40C057/time--v1.png" />
                <div class="select">
                  <select
                    onChange={(e) => {
                      setTime(e.target.value);
                    }}
                  >
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
                handleSave(data.id);
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
        </>
      )}
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

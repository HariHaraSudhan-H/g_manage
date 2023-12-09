import React, { useEffect, useState } from "react";
import styles from "../Styles/main.module.css";
import { connect } from "react-redux";
import {
  updateEditMode,
  updateList,
  updateTodayList,
  updateUpcomingList,
} from "../Redux/Actions";
import { todayDate } from "./App";

const CreateForm = (props) => {
  const today = new Date();
  const {
    createMode,
    setCreateMode,
    dispatch,
    editMode,
    editId,
    list,
    todayAppointments,
    upcomingAppointments,
  } = props;
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(
    `${today.getFullYear()}-${today.getMonth() + 1}-${(
      "0" + today.getDay()
    ).slice(-2)}`
  );
  const [time, setTime] = useState("");

  useEffect(() => {
    if (editMode) {
      const data = list[editId];
      setFirstName(data.firstname);
      setSecondName(data.lastname);
      setAge(data.age);
      setLocation(data.location);
      setDate(data.date);
      setTime(data.time);
    }
  }, [editMode]);
  const handleClose = () => {
    document.getElementById("main").style.filter = "";
    setCreateMode(false);
    dispatch(updateEditMode(false));
  };

  const getNewData = () => {
    const newData = {
      firstname: firstName,
      lastname: secondName,
      age: age,
      location: location,
      date: date,
      time: time,
    };

    return newData;
  };

  const handleCreate = () => {
    const applyChanges = (list) => {
      const listData = list;
      listData.forEach((client) => {
        if (client.id === editId) {
          client.firstname = firstName;
          client.lastname = secondName;
          client.age = age;
          client.location = location;
          client.time = time;
          client.date = date;
        }
      });
      return [...listData];
    };
    if (editMode) {
      let updatedList = applyChanges(list);
      dispatch(updateList(updatedList));
      dispatch(updateEditMode(false, undefined));
      return;
    }
    setCreateMode(false);
    const newData = {
      id: props.list.length,
      ...getNewData(),
    };
    dispatch(updateList([...props.list, newData]));
    document.getElementById("main").style.filter = "";
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };
  return (
    <div className={styles.createForm}>
      <h1>{editMode ? "Edit Appointment" : "Add Appointment"}</h1>
      <span className={styles.closeButton} onClick={handleClose}>
        <img src="https://img.icons8.com/ios-glyphs/30/delete-sign.png" />
      </span>
      <div className={styles.nameFields}>
        <input
          class="input"
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input
          class="input"
          type="text"
          placeholder="Last Name"
          value={secondName}
          onChange={(e) => {
            setSecondName(e.target.value);
          }}
        />
      </div>
      <div className={styles.userAgeLocation}>
        <input
          class="input"
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <input
          class="input"
          type="text"
          placeholder="Age"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
      </div>

      <div className={styles.timeDateSelection}>
        <input
          class="input"
          type="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            console.log(typeof e.target.value);
          }}
        />
        <div class="select" style={{ width: "47.5%" }}>
          <select onChange={handleTimeChange}>
            <option>Choose slot</option>
            <option>8 - 9 AM</option>
            <option>9 - 10 AM</option>
            <option>11 - 12 PM</option>
            <option>12 - 1 PM</option>
            <option>4 - 5 PM</option>
            <option>5 - 6 PM</option>
            <option>6 - 7 PM</option>
            <option>7 - 8 PM</option>
            <option>8 - 9 PM</option>
          </select>
        </div>
      </div>
      <button class="button" onClick={handleCreate}>
        {editMode ? "Save" : "Create"}
      </button>
    </div>
  );
};

const callback = (state) => {
  console.log(state);
  return {
    ...state,
  };
};

export default connect(callback)(CreateForm);

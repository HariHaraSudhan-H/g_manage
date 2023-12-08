import React, { useState } from "react";
import styles from "../Styles/main.module.css";
import { todayAppointments } from "../Pages/Home";

const CreateForm = (props) => {
    const today = new Date();
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(`${today.getFullYear()}-${today.getMonth()+1}-${("0"+today.getDay()).slice(-2)}`);
  const [time, setTime] = useState("");
  const { createMode, setCreateMode } = props;
  const handleClose = () => {
    document.getElementById("main").style.filter = "";
    setCreateMode(false);
  };

  const handleCreate = () => {
      setCreateMode(false);
    const newData = {
        firstname: firstName,
        lastname: secondName,
        age: age,
        location: location,
        date: date,
        time: time
    }
    todayAppointments.push(newData);
    console.log(todayAppointments);
    document.getElementById("main").style.filter = "";
  };
  return (
    <div className={styles.createForm}>
      <h1>Add Appointment</h1>
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
            console.log(typeof(e.target.value))
          }}
        />
        <div class="select">
          <select>
            <option>Select dropdown</option>
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
        Create
      </button>
    </div>
  );
};

export default CreateForm;

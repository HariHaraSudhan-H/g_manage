import React, { useEffect, useState } from "react";
import styles from "../Styles/main.module.css";
import { connect } from "react-redux";
import {
  updateEditMode,
  updateList,
  updateNotification,
} from "../Redux/Actions";
import { todayDate } from "./App";
const CreateForm = (props) => {
  const { setCreateMode, dispatch, editMode, editId, list } = props;
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [age, setAge] = useState(12);
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(
    `${todayDate.getFullYear()}-${todayDate.getMonth() + 1}-${(
      "0" + todayDate.getDate()
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
  }, [editMode, editId, list]);

  // Handles closing of Create Dialog box and discards unsaved data
  const handleClose = () => {
    document.getElementById("main").style.filter = "";
    setCreateMode(false);
    dispatch(updateEditMode(false));
  };


  // Gives us new fresh date for updating the updations
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

  // Checks for logical errors for the data in form
  const checkValidation = () => {
    let check = true;
    let message = "";
    if (firstName.length === 0 || secondName.length === 0) {
      check = false;
      message = "Enter names as per format";
    }

    if (typeof age !== "number"||age===0) {
      check = false;
      message = "Enter age as per format";
    }

    if (location.length === 0) {
      check = false;
      message = "Enter location as per format";
    }

    if (time.length === 0 || time === "Choose slot") {
      check = false;
      message = "Choose a time slot from dropdown";
    }

    if (date.length === 0) {
      check = false;
      message = "Choose a date";
    }

    dispatch(updateNotification({
      open:true,
      message: message,
      severity:"warning"
    }))

    return {
      check: check,
      message: message,
    };
  };

  // Handles saving the data entered in the form
  const handleSave = (e) => {
    e.preventDefault();
    const check = checkValidation();

    // Neglects the form if any error found
    if (!check.check) {
      return;
    }

    // applied changes to the data in the list
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
    dispatch(
      updateNotification({
        open: true,
        message: editMode
          ? "Appointment updated successfully"
          : "Appointment created successfully",
        severity:"success"
      })
    );

    // performs when data is updated
    if (editMode) {
      const updatedList = applyChanges(list);
      dispatch(updateList(updatedList));
      dispatch(updateEditMode(false, undefined));
      document.getElementById("main").style.filter = "";
      return;
    }

    // executes when new appointment is created
    setCreateMode(false);
    const newData = {
      id: props.list.length,
      ...getNewData(),
    };
    dispatch(updateList([...props.list, newData]));
    document.getElementById("main").style.filter = "";
  };

  // handles changing of time from dropdown
  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  return (
    <form className={styles.createForm}>
      <h1>{editMode ? "Edit Appointment" : "Add Appointment"}</h1>
      <span className={styles.closeButton} onClick={handleClose}>
        <img
          src="https://img.icons8.com/ios-glyphs/30/delete-sign.png"
          alt="closeIcon"
        />
      </span>
      <div className={styles.nameFields}>
        <input
          className="input"
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          required
        />
        <input
          className="input"
          type="text"
          placeholder="Last Name"
          value={secondName}
          onChange={(e) => {
            setSecondName(e.target.value);
          }}
          required
        />
      </div>
      <div className={styles.userAgeLocation}>
        <input
          className="input"
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          required
        />
        <input
          className="input"
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => {
            const newAge = e.target.value;
            setAge(Number(newAge));
          }}
          required
        />
      </div>

      <div className={styles.timeDateSelection}>
        <input
          className="input"
          type="date"
          min={`${todayDate.getFullYear()}-${todayDate.getMonth() + 1}-${(
            "0" + todayDate.getDate()
          ).slice(-2)}`}
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <div className="select" style={{ width: "47.5%" }}>
          <select
            onChange={handleTimeChange}
            required
            placeholder="Choose slot"
          >
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
      <button className="button" type="submit" onClick={handleSave}>
        {editMode ? "Save" : "Create"}
      </button>
    </form>
  );
};

const callback = (state) => {
  return {
    ...state,
  };
};

export default connect(callback)(CreateForm);

import React, { useEffect, useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { connect } from "react-redux";
import carryoverStyles from "../Styles/main.module.css";
import styles from "../Styles/calendar.module.css";
import Client from "../Components/Client";
import { StaticDatePicker } from "@mui/x-date-pickers";

const Calendar = (props) => {
  const [date, setDate] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const { list } = props;

  // formats and gives us date in required format
  const dateFormatted = (date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${(
      "0" + date.getDate()
    ).slice(-2)}`;
  };

  useEffect(() => {
    const filteredDataList = list.filter(
      (client) => client.date.toString() === date.toString()
    );
    setFilteredList(filteredDataList);
  }, [date,list]);
  const handleDateChange = (newDate) => {
    const newDataFormatted = dateFormatted(newDate.$d);
    setDate(newDataFormatted);
  };
  return (
    <>
      <header className={styles.calendarHeader}>
        <h1 className="">Calendar View</h1>
      </header>
      <div id="main" className={styles.calendarMain}>
        <section className={styles.datePicker}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <StaticDatePicker
                label="Select Date"
                onChange={handleDateChange}
              />
            </DemoContainer>
          </LocalizationProvider>
        </section>
        <section className={carryoverStyles.appointmentsSection}>
          <h1>Your Appointments</h1>
          <div>
            {filteredList.length > 0 ? (
            filteredList.map((data,index) => {
              return <Client data={data} date={new Date(data.date)} key={index} />;
            })
          ) : (
            <div className={carryoverStyles.zeroAppointmentsMessage}>
              No Appointments
            </div>
          )}
          </div>
          
        </section>
      </div>
    </>
  );
};

const callback = (state) => {
  return {
    ...state,
  };
};

export default connect(callback)(Calendar);

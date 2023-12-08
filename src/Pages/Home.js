import React, { useEffect } from "react";
import styles from "../Styles/main.module.css";
import Client from "../Components/Client";
import { connect } from "react-redux";
import { todayDate } from "../Components/App";

export let todayAppointments = [
  // {
  //   firstname: "Jack",
  //   lastname: "Samson",
  //   age: 22,
  //   date: new Date("12/04/2023"),
  //   location: "somewhere",
  //   time: "11-12 AM",
  // },
];
export let weekAppointments = [
  // {
  //   firstname: "Jack",
  //   lastname: "James",
  //   age: 23,
  //   location: "somewhere",
  //   date: new Date("2023-12-02"),
  //   time: "11-12 AM",
  // },
];

const Home = (props) => {
  // useEffect(() => {
  //   const getFilteredData = async () => {
  //     todayAppointments = await props.list.filter(
  //       (client) =>{
  //         return (client.date.toString() === `${todayDate.getFullYear()}-${todayDate.getMonth() + 1}-${(
  //           "0" + todayDate.getDay()
  //         ).slice(-2)}`.toString())
  //       });
  //   };
  //   getFilteredData();
  //   console.log(todayAppointments);
  // },[props.data]);
  // const todayAppointments = [
  //   {
  //     firstname: "Jack",
  //     lastname: "Samson",
  //     age: 22,
  //     date: new Date("12/04/2023"),
  //     location: "somewhere",
  //     time: "11-12 AM",
  //   },
  // ];
  // const weekAppointments = [
  //   {
  //     firstname: "Jack",
  //     lastname: "James",
  //     age: 23,
  //     location: "somewhere",
  //     date: new Date("2023-12-02"),
  //     time: "11-12 AM",
  //   },
  // ];
  return (
    <div id="main">
      <header className={styles.WebHeader}>
        <h1 className="title is-2 is-spaced">Hii Trainer!</h1>
        <div>
          <h1>Appointments</h1>
          <div className={styles.appointmentStatus}>
            <span>
              <h2>Today</h2>
              <span>{todayAppointments.length}</span>
            </span>
            <span>
              <h2>This Week</h2>
              <span>{weekAppointments.length}</span>
            </span>
            <span>
              <h2>Total</h2>
              <span>{weekAppointments.length}</span>
            </span>
          </div>
        </div>
      </header>
      <main className={styles.mainBody}>
        <section className={styles.appointmentsSection}>
          <h1>Today's Appointments</h1>
          <div>
            {props.todayAppointments.map((data) => {
              return <Client data={data} date={todayDate} />;
            })}
          </div>
        </section>
        <section className={styles.appointmentsSection}>
          <h1>Upcoming Appointments</h1>
          {props.upcomingAppointments.map((data) => {
            return <Client data={data} date={new Date(data.date)} />;
          })}
        </section>
      </main>
    </div>
  );
};

const callback = (state) => {
  console.log(state);
  return {
    ...state,
  };
};

export default connect(callback)(Home);

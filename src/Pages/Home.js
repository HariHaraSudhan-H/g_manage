import React from "react";
import styles from "../Styles/main.module.css";
import Client from "../Components/Client";

export const todayAppointments = [
  {
    firstname: "Jack",
    lastname: "Samson",
    age: 22,
    date: new Date("12/04/2023"),
    location: "somewhere",
    time: "11-12 AM",
  },
];
const weekAppointments = [
  {
    firstname: "Jack",
    lastname: "James",
    age: 23,
    location: "somewhere",
    date: new Date("2023-12-02"),
    time: "11-12 AM",
  },
];

const Home = () => {
  const today = new Date();
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
            {todayAppointments.map((data) => {
              return <Client data={data} date={today} />;
            })}
          </div>
        </section>
        <section className={styles.appointmentsSection}>
          <h1>This Week's Appointments</h1>
          {weekAppointments.map((data) => {
            return <Client data={data} date={data.date} />;
          })}
        </section>
      </main>
    </div>
  );
};

export default Home;

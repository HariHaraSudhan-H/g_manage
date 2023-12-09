import React, { useEffect } from "react";
import styles from "../Styles/main.module.css";
import Client from "../Components/Client";
import { connect } from "react-redux";
import { todayDate } from "../Components/App";

const Home = (props) => {
  return (
    <div id="main">
      <header className={styles.WebHeader}>
        <h1 className="title is-2 is-spaced">Hii Trainer!</h1>
        <div>
          <h1>Appointments</h1>
          <div className={styles.appointmentStatus}>
            <span>
              <h2>Today</h2>
              <span>{props.todayAppointments.length}</span>
            </span>
            <span>
              <h2>This Week</h2>
              <span>{props.upcomingAppointments.length}</span>
            </span>
            <span>
              <h2>Total</h2>
              <span>{props.todayAppointments.length+props.upcomingAppointments.length}</span>
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

import React from "react";
import styles from "../Styles/main.module.css";
import Client from "../Components/Client";
import { connect } from "react-redux";
import { todayDate } from "../Components/App";

const Home = (props) => {
  // gives us greetings as per time
  const getGreetings = () => {
    const time = todayDate.getHours();
    if (time > 0 && time < 12) {
      return "Good Morning";
    } else if (time > 11 && time <= 15) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

  return (
    <div id="main">
      <header className={styles.WebHeader}>
        <h1 className="">Hi {getGreetings()}</h1>
        <div>
          <h1>Appointments</h1>
          <div className={styles.appointmentStatus}>
            <span>
              <h2>Today</h2>
              <span>{props.todayAppointments.length}</span>
            </span>
            <span>
              <h2>Total</h2>
              <span>
                {props.todayAppointments.length +
                  props.upcomingAppointments.length}
              </span>
            </span>
          </div>
        </div>
      </header>
      <main className={styles.mainBody}>
        <section className={styles.appointmentsSection}>
          <h1>Today's Appointments</h1>
          <div>
            {props.todayAppointments.length > 0 ? (
              props.todayAppointments.map((data) => {
                return <Client data={data} date={new Date(data.date)} />;
              })
            ) : (
              <div className={styles.zeroAppointmentsMessage}>
                No Appointments
              </div>
            )}
          </div>
        </section>
        <section className={styles.appointmentsSection}>
          <h1>Upcoming Appointments</h1>
          <div>
             {props.upcomingAppointments.length > 0 ? (
            props.upcomingAppointments.map((data) => {
              return <Client data={data} date={new Date(data.date)} />;
            })
          ) : (
            <div className={styles.zeroAppointmentsMessage}>
              No Appointments
            </div>
          )}
          </div>
         
        </section>
      </main>
    </div>
  );
};

const callback = (state) => {
  return {
    ...state,
  };
};

export default connect(callback)(Home);

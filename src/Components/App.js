import Navbar from "./Navbar";
import styles from "../Styles/main.module.css"
function App() {
  return (
    <div className="App">
      <Navbar />
      <header className={styles.WebHeader}>
        <h1 className="title is-2 is-spaced">Hii Trainer!</h1>
        <div>
        <h1>Appointments</h1>
        Today 0
        This Month 0
        Total 10
        </div>
      </header>
    </div>
  );
}

export default App;

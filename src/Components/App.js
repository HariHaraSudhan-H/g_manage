import Navbar from "./Navbar";
import styles from "../Styles/main.module.css"
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Calendar from "../Pages/Calendar";
import { useEffect, useState } from "react";
import CreateForm from "./CreateForm";
import { connect } from "react-redux";
export const todayDate = new Date();
function App() {
  const [createMode,setCreateMode] = useState(false);
  useEffect(()=>{

  })
  return (
    <div className="App">
      <Navbar createMode={createMode} setCreateMode={setCreateMode}/>
      {createMode?<CreateForm createMode={createMode} setCreateMode={setCreateMode}/>:<></>}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/calendar" element={<Calendar/>}/>
      </Routes>
    </div>
  );
}

const callback = (state) => {
  console.log(state);
  return {
    ...state
  };
};

export default connect(callback)(App);

import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Calendar from "../Pages/Calendar";
import { useEffect, useState } from "react";
import CreateForm from "./CreateForm";
import { connect } from "react-redux";
import { updateTodayList, updateUpcomingList } from "../Redux/Actions";
export const todayDate = new Date();
function App(props) {
  const { dispatch, list } = props;
  const [createMode, setCreateMode] = useState(false);

  useEffect(() => {
    const updatedTodayList = list.filter(
      (client) =>
        client.date.toString() ===
        `${todayDate.getFullYear()}-${todayDate.getMonth() + 1}-${(
          "0" + todayDate.getDay()
        ).slice(-2)}`.toString()
    );
    const updatedUpcomingList = list.filter(
      (client) =>
        client.date.toString() !==
        `${todayDate.getFullYear()}-${todayDate.getMonth() + 1}-${(
          "0" + todayDate.getDay()
        ).slice(-2)}`.toString()
    );
    dispatch(updateTodayList(updatedTodayList));
    dispatch(updateUpcomingList(updatedUpcomingList));
  }, [props.list]);

  return (
    <div className="App">
      <Navbar createMode={createMode} setCreateMode={setCreateMode} />
      {createMode || props.editMode ? (
        <CreateForm createMode={createMode} setCreateMode={setCreateMode} />
      ) : (
        <></>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </div>
  );
}

const callback = (state) => {
  console.log(state);
  return {
    ...state,
  };
};

export default connect(callback)(App);

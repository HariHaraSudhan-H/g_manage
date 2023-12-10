import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Calendar from "../Pages/Calendar";
import { useEffect, useState } from "react";
import CreateForm from "./CreateForm";
import { connect } from "react-redux";
import { updateTodayList, updateUpcomingList } from "../Redux/Actions";
import Notification from "./Notification";
export const todayDate = new Date();
function App(props) {
  const { dispatch, list } = props;
  const [createMode, setCreateMode] = useState(false);

  useEffect(() => {

    // Filters todays appointment list from complete list
    const updatedTodayList = list.filter(
      (client) =>
        client.date.toString() ===
        `${todayDate.getFullYear()}-${todayDate.getMonth() + 1}-${(
          "0" + todayDate.getDate()
        ).slice(-2)}`.toString()
    );

    // filters other appointment excluding today's
    const updatedUpcomingList = list.filter(
      (client) =>
        client.date.toString() !==
        `${todayDate.getFullYear()}-${todayDate.getMonth() + 1}-${(
          "0" + todayDate.getDate()
        ).slice(-2)}`.toString()
    );

    dispatch(updateTodayList(updatedTodayList));
    dispatch(updateUpcomingList(updatedUpcomingList));
  }, [list,dispatch]);

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
      {<Notification/>}
    </div>
  );
}

const callback = (state) => {
  return {
    ...state,
  };
};

export default connect(callback)(App);

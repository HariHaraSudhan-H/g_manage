import {
  UPDATE_LIST,
  UPDATE_TODAY_LIST,
  UPDATE_UPCOMING_LIST,
} from "../Actions";

const intialState = {
  list: [],
  todayAppointments: [],
  upcomingAppointments: [],
};

export function listData(state = intialState, action) {
  switch (action.type) {
    case UPDATE_LIST:
      return {
        ...state,
        list: action.list,
      };
    case UPDATE_TODAY_LIST:
      return {
        ...state,
        todayAppointments: action.todayList,
      };
    case UPDATE_UPCOMING_LIST:
      return {
        ...state,
        upcomingAppointments: action.upcomingList,
      };
    default:
      return state;
  }
}

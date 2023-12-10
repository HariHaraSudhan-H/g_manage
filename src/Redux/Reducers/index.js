import {
  UPDATE_EDIT_MODE,
  UPDATE_LIST,
  UPDATE_NOTIFICATION,
  UPDATE_TODAY_LIST,
  UPDATE_UPCOMING_LIST,
} from "../Actions";

const intialState = {
  list: [],
  todayAppointments: [],
  upcomingAppointments: [],
  editMode: false,
  editId: undefined,
  notification: {
    open: false,
    message:"",
    severity:""
  }
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
    case UPDATE_EDIT_MODE:
      return {
        ...state,
        editMode: action.editMode,
        editId: action.editId,
      };
    case UPDATE_NOTIFICATION:
      return{
        ...state,
        notification: action.notification
      }
    default:
      return state;
  }
}

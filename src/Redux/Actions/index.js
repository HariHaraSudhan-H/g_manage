// Action types
export const UPDATE_LIST = "UPDATE_LIST";
export const UPDATE_TODAY_LIST = "UPDATE_TODAY_LIST";
export const UPDATE_UPCOMING_LIST = "UPDATE_UPCOMING_LIST";
export const UPDATE_EDIT_MODE = "UPDATE_EDIT_MODE";
export const UPDATE_NOTIFICATION = "UPDATE_NOTIFICATION";

// Action creators
export const updateList = (list)=>{
    return {
        type: UPDATE_LIST,
        list
    }
}

export const updateTodayList = (todayList)=>{
    return{
        type: UPDATE_TODAY_LIST,
        todayList
    }
}

export const updateUpcomingList = (upcomingList)=>{
    return{
        type: UPDATE_UPCOMING_LIST,
        upcomingList
    }
}

export const updateEditMode = (editMode,editId)=>{
    return {
        type: UPDATE_EDIT_MODE,
        editMode,
        editId
    }
}

export const updateNotification = (notification)=>{
    return{
        type: UPDATE_NOTIFICATION,
        notification
    }
}
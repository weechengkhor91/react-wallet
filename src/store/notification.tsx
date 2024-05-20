import { createSlice } from "@reduxjs/toolkit";

interface NotificationState {
    notification: {
        status:string,
        message:string
    }
}
const initialNotificationState:NotificationState = {
    notification: {
        status: "",
        message: ""
    }
}

const sliceNotification = createSlice({
    name: 'notification',
    initialState: initialNotificationState,
    reducers: {
        showNotifcation(state, action){
            console.log("shownotifcation", action.payload);
            state.notification = {
                status: action.payload.status,
                message: action.payload.message
            }
        }
    }
})

export const actionNotification = sliceNotification.actions;

export default sliceNotification;


import { configureStore } from "@reduxjs/toolkit";
import sliceLogin from "./login";
import sliceNotification from "./notification";
import { useDispatch } from "react-redux";


const store = configureStore({
    reducer: {
        auth: sliceLogin.reducer,
        notify: sliceNotification.reducer
    }
});

//state typescript
export type RootState = ReturnType<typeof store.getState>

//dispatch typescript
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>() 

export default store;
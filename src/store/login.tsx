import { createSlice } from "@reduxjs/toolkit";
import { actionNotification } from "./notification";
import { Dispatch } from "redux";
import {  signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { auth } from "../firebase.ts";
const initialLoginState = {
    isLoggedIn:false,
    userId:null,
    token:null,
    tokenExpiration:"",
    username:""
}

const sliceLogin = createSlice({
    name: 'auth',
    initialState: initialLoginState,
    reducers: {
        login(state, action){
           
            //console.log("action login",action.payload);
            state.isLoggedIn = !!action.payload.accssToke;
            state.userId = action.payload.uid;
            state.token = action.payload.accessToken;
            state.tokenExpiration = action.payload.expirationTimeISOString;
            state.username = action.payload.displayName;
            localStorage.setItem('userData', JSON.stringify({ userId: action.payload.uid, username:action.payload.displayName, token: action.payload.accessToken, expiration: action.payload.expirationTimeISOString }));
         
        }
    }
})
//export slice actions
export const actionLogin = sliceLogin.actions;

export default sliceLogin;

type UserInfo = {
    email: string,
    password: string
}
export const actionSendRequest = (info: UserInfo) => {
    return async (dispatch:Dispatch) => {
        //sendRequest
        const sendRequest = async() => {
            console.log("info",info);
            //const auth = getAuth();
            const response = await signInWithEmailAndPassword(auth, info.email, info.password);
 
              // Signed in
            const user = await response.user;
            const accessToken = await user.getIdToken();

            const tokenExpiration = await user.getIdTokenResult();

            const expirationTime = await tokenExpiration.expirationTime;

            
            const expirationTimeISOString = await new Date(expirationTime).toISOString();


            // await updateProfile(response.user, {
            //     displayName: "Wee Cheng"
            //   });
            
            // const response = await fetch(`../data/login.json`, {
            //     method :"POST",
            //     body: JSON.stringify(info),
            //     headers: {
            //         "Content-Type": "application/json"
            //     }

            // });
            // console.log("response ok",response.ok);
            // if(!response.ok){
            //     throw new Error("Something went wrong.")
                
            // }
            // const data = await response.json();
            return {...user.providerData[0], accessToken, expirationTimeISOString};
        }

        try{
            const formData = await sendRequest();
            console.log("formdata",formData);
            if(formData){
                dispatch(actionLogin.login(formData));
            }

            return formData;

        }catch(err){
            dispatch(actionNotification.showNotifcation({
                status: 'error',
                message: 'Incorrect email or password.'
            }))
        }
    }
}
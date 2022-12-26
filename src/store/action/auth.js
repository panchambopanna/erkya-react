import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase";
import { SET_USER, LOGOUT } from "./types";

// Create a User - Firebase

export const signUp = (email, password) => async (dispatch) => {
  try {
    let res = await createUserWithEmailAndPassword(auth, email, password);
    dispatch({
      type: SET_USER,
      payload: res.user,
    });
  } catch (error) {
    console.log(error);
  }
};

// Login a User - Firebase

export const logIn = (email, password) => async (dispatch) => {
  try {
    let res = await signInWithEmailAndPassword(auth, email, password);
    dispatch({
      type: SET_USER,
      payload: res.user,
    });
  } catch (error) {
    console.log(error);
  }
};

// Load user - Firebase

export const loadUser = () => async (dispatch) => {
  try {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({
          type: SET_USER,
          payload: user,
        });
      } else {
        dispatch({
          type: LOGOUT,
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

// Logout a user - Firebase

export const logOut = () => async (dispatch) => {
  try {
    signOut(auth);
    dispatch({
      type: LOGOUT,
    });
  } catch (error) {
    console.log(error);
  }
};
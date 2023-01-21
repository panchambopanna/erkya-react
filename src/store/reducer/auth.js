import { LOGOUT, SET_USER } from "../action/types";

const initialState = {
  user: null,
  isAuthenticated: null,
  loading: true,
};

export default function auth(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_USER:
      return {
        user: payload,
        isAuthenticated: true,
        laoding: false,
      };
    case LOGOUT:
      return { user: null, isAuthenticated: false, loading: false };
    default:
      return state;
  }
}

import { LOGOUT, SET_USER, SET_LOADING } from "../action/types";

const initialState = {
  user: null,
  isAuthenticated: null,
  loading: true,
};

export default function auth(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case SET_USER:
      return {
        user: payload,
        isAuthenticated: true,
        loading: false,
      };
    case LOGOUT:
      return { user: null, isAuthenticated: false, loading: false };
    default:
      return state;
  }
}

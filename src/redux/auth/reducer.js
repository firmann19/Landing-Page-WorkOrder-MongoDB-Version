import { USER_LOGIN, USER_LOGOUT } from "./constants";

let initialState = localStorage.getItem("auth")
  ? JSON.parse(localStorage.getItem("auth"))
  : {
      token: null,
      user: null,
      namaDepartement: null,
      departementId: null,
      userId: null,
      role: null
    };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        token: action.token,
        user: action.user,
        namaDepartement: action.namaDepartement,
        departementId: action.departementId,
        userId: action.userId,
        role: action.role
      };

    case USER_LOGOUT:
      return {
        token: null,
        user: null,
        namaDepartement: null,
        departementId: null,
        userId: null,
        role: null
      };

    default:
      return state;
  }
}

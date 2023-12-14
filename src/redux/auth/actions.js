import { USER_LOGIN, USER_LOGOUT } from "./constants";

export function userLogin(token, user, namaDepartement, departementId, userId) {
  return {
    type: USER_LOGIN,
    token,
    user,
    namaDepartement,
    userId,
    departementId
  };
}

export function userLogout() {
  localStorage.removeItem("auth");
  return {
    type: USER_LOGOUT,
  };
}

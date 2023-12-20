import { USER_LOGIN, USER_LOGOUT } from "./constants";

export function userLogin(token, user, namaDepartement, departementId, userId, role) {
  return {
    type: USER_LOGIN,
    token,
    user,
    namaDepartement,
    departementId,
    userId,
    role
  };
}

export function userLogout() {
  localStorage.removeItem("auth");
  return {
    type: USER_LOGOUT,
  };
}

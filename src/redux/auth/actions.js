import { USER_LOGIN, USER_LOGOUT } from "./constants";

export function userLogin(
  token,
  user,
  namaDepartement,
  departementId,
  userId,
  role,
  image
) {
  return {
    type: USER_LOGIN,
    token,
    user,
    namaDepartement,
    departementId,
    userId,
    role,
    image,
  };
}

export function userLogout() {
  localStorage.removeItem("auth");
  return {
    type: USER_LOGOUT,
  };
}

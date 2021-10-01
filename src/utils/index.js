import { getSessionStorage } from "../pages/User/slice/userAuthSlice";
import { ADMIN_ROLE_CODE } from "../constants";

export const checkLoginState = () => {
  const userAuth = getSessionStorage();
  if (userAuth) {
    return true;
  }
  return false;
};

export const isAdmin = () => {
  const adminAuth = getSessionStorage();
  if ( adminAuth?.user?.role === ADMIN_ROLE_CODE) {
    return true;
  }
  return false;
};


import { logout } from "./authSlice";

export const startAuthSession = (token, dispatch, navigate) => {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));

    const expirationTime = payload.exp * 1000;
    const remainingTime = expirationTime - Date.now();

    if (remainingTime <= 0) {
      dispatch(logout());
      navigate("/login", { replace: true });
      return;
    }

    const timer = setTimeout(() => {
      dispatch(logout());
      navigate("/login", { replace: true });
    }, remainingTime);

    return () => clearTimeout(timer);
  } catch (error) {
    console.error("Error starting auth session:", error);

    dispatch(logout());
    navigate("/login", { replace: true });
  }
};

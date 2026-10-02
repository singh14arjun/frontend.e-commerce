import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { startAuthSession } from "../../services/authSession";

function AuthSessionManager() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (!token) {
      return;
    }
    const cleanup = startAuthSession(token, dispatch, navigate);
    return cleanup;
  }, [token, dispatch, navigate]);
  return null;
}

export default AuthSessionManager;

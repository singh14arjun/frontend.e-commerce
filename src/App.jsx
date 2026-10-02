import "./index.css";
import AppRoutes from "./router/AppRoutes";
import AuthSessionManager from "./components/authSessionManager/AuthSessionManager";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <AuthSessionManager />
      <AppRoutes />
      <ToastContainer />
    </>
  );
}

export default App;

import { Field, Form, Formik } from "formik";
import Container from "../../../components/common/Container";
import logo from "../../../assets/images/logo.png";
import { BsApple, BsGoogle } from "react-icons/bs";
import { MdMessage } from "react-icons/md";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../api/authService";
import { useSelector } from "react-redux";
import { loginSuccess } from "../../../services/authSlice";
import { toast } from "react-toastify";

export default function Login() {
  const validationSchema = Yup.object({
    email: Yup.string().trim().required("Email is required"),

    password: Yup.string().required("Password is required"),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state?.auth?.user);
  const token = useSelector((state) => state?.auth?.token);

  const handleLogin = async (values) => {
    try {
      const response = await login(values);

      if (!response.success) {
        console.error("Login failed:", response.message);
        toast.error(response.message || "Login failed. Please try again.");
        return;
      }

      const token = response?.data?.token;
      const user = response?.data?.userResponseDTO;

      console.log("Token:", token);
      console.log("User Response:", user);

      if (!token || typeof token !== "string") {
        console.log("Invalid or missing token");
        return;
      }

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      dispatch(
        loginSuccess({
          token: token,
          user: user,
        }),
      );

      if (user?.role === "SELLER") {
        navigate("/seller");
      } else if (user?.role === "ADMIN") {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
      toast.success("Login successful!");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="my-10">
      <Container>
        <div className="flex flex-col justify-center gap-3 mx-auto max-w-150 bg-primary-light border border-primary p-3 sm:p-6 md:p-10 rounded-2xl">
          <div className="flex justify-center">
            <img src={logo} alt="logo" className="w-40 h-10" />
          </div>
          <h1 className="text-center text-text-primary text-3xl font-sans">
            Sign in to your account
          </h1>
          <h3 className="text-center text-text-secondary font-geist">
            Access your orders, wishlist, and exclusive member discounts
          </h3>
          <div>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                try {
                  handleLogin(values);
                } finally {
                  setSubmitting(false);
                }
              }}
            >
              {({ errors, touched, values, isSubmitting }) => {
                const isDisabled =
                  isSubmitting || !values.email.trim() || !values.password;
                return (
                  <Form>
                    <div>
                      <label htmlFor="email">Email</label>
                      <Field
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className={`w-full border border-primary-light rounded-lg p-2 mt-1 ${errors.email && touched.email ? "border-red-500" : ""}`}
                      />
                      {errors.email && touched.email && (
                        <div className="text-danger-dark text-sm">
                          {errors.email}
                        </div>
                      )}
                    </div>

                    <div>
                      <label htmlFor="password">Password</label>
                      <Field
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        className={`w-full border border-primary-light rounded-lg p-2 mt-1 ${errors.password && touched.password ? "border-red-500" : ""}`}
                      />
                    </div>
                    {errors.password && touched.password && (
                      <div className="text-danger-dark text-sm">
                        {errors.password}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isDisabled}
                      className={`w-full bg-primary text-white py-2 px-4 rounded-lg mt-4 cursor-pointer${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                      {isSubmitting ? "Signing in..." : "Sign In"}
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="border-t-2 border-primary w-full"></div>
            <div className="uppercase text-sm text-text-primary w-full px-2 text-center">
              or continue with
            </div>
            <div className="border-t-2 border-primary w-full"></div>
          </div>
          <div className="flex justify-between ">
            <div className="flex gap-2 items-center bg-text-muted px-2 rounded-full">
              <BsGoogle className="text-primary-light" />
              <p>Google</p>
            </div>
            <div className="flex gap-2 items-center bg-text-muted px-2 rounded-full">
              <BsApple className="text-primary-light" />
              <p>Apple</p>
            </div>
            <div className="flex gap-2 items-center bg-text-muted px-2 rounded-full">
              <MdMessage className="text-primary-light" />
              <p>OTP</p>
            </div>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <p className="text-sm text-text-primary">New to Apex Store </p>
            <span
              className="text-sm text-primary hover:underline cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Create an account
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
}

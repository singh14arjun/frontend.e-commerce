import { Field, Form, Formik } from "formik";
import Container from "../../../components/common/Container";
import logo from "../../../assets/images/logo.png";
import { BsApple, BsGoogle } from "react-icons/bs";
import { BiLogIn, BiShow, BiHide } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as Yup from "yup";

export default function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .trim()
      .required("First name is required")
      .min(2, "First name must be at least 2 characters"),

    lastName: Yup.string()
      .trim()
      .required("Last name is required")
      .min(2, "Last name must be at least 2 characters"),

    email: Yup.string()
      .trim()
      .email("Enter a valid email address")
      .required("Email is required"),

    phoneNumber: Yup.string()
      .matches(/^[0-9]+$/, "Phone number must contain only numbers")
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),

    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(
        /[@$!%*?&#]/,
        "Password must contain at least one special character",
      )
      .required("Password is required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });

  return (
    <div>
      <Container className="my-10">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="hidden md:block">
            <img src={logo} alt="logo" />
          </div>

          <div className="flex flex-col gap-2 border rounded p-2 sm:p-10 bg-primary-light">
            <h1 className="text-3xl font-bold text-text-primary font-sans">
              Create your ApexStore Account
            </h1>

            <h3 className="text-text-muted">
              Join over 2 million shoppers and unlock Gold tier welcome rewards.
            </h3>

            <div className="grid sm:grid-cols-2 gap-2 sm:gap-5">
              <div className="flex items-center gap-2 bg-text-muted p-2 rounded hover:bg-primary cursor-pointer">
                <BsGoogle className="text-primary-light" />
                <p>Continue with Google</p>
              </div>

              <div className="flex items-center gap-2 bg-text-muted p-2 rounded hover:bg-primary cursor-pointer">
                <BsApple className="text-primary-light" />
                <p>Continue with Apple</p>
              </div>
            </div>

            <div className="flex justify-between items-center w-full">
              <div className="border-t-2 border-primary w-full"></div>

              <div className="uppercase text-sm text-text-primary w-full px-2 text-center">
                Or register with email
              </div>

              <div className="border-t-2 border-primary w-full"></div>
            </div>

            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                password: "",
                confirmPassword: "",
                email: "",
                phoneNumber: "",
                profilePicture: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                errors,
                touched,
                setFieldValue,
              }) => (
                <Form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                  {/* First Name & Last Name */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1">
                      <label htmlFor="firstName" className="text-text-primary">
                        First Name
                      </label>

                      <Field
                        id="firstName"
                        type="text"
                        name="firstName"
                        placeholder="Enter your first name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`border bg-text-light rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary ${errors.firstName && touched.firstName
                          ? "border-danger"
                          : ""
                          }`}
                      />

                      {errors.firstName && touched.firstName && (
                        <p className="text-danger text-sm">
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-1">
                      <label htmlFor="lastName" className="text-text-primary">
                        Last Name
                      </label>

                      <Field
                        id="lastName"
                        type="text"
                        name="lastName"
                        placeholder="Enter your last name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`border bg-text-light rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary ${errors.lastName && touched.lastName
                          ? "border-danger"
                          : ""
                          }`}
                      />

                      {errors.lastName && touched.lastName && (
                        <p className="text-danger text-sm">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-text-primary">
                      Email
                    </label>

                    <Field
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`border bg-text-light rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary ${errors.email && touched.email ? "border-danger" : ""
                        }`}
                    />

                    {errors.email && touched.email && (
                      <p className="text-danger text-sm">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="phoneNumber" className="text-text-primary">
                      Phone Number
                    </label>

                    <Field
                      id="phoneNumber"
                      type="tel"
                      name="phoneNumber"
                      inputMode="numeric"
                      maxLength={10}
                      placeholder="Enter your 10 digit phone number"
                      value={values.phoneNumber}
                      onChange={(e) => {
                        const onlyNumbers = e.target.value.replace(/\D/g, "");

                        setFieldValue("phoneNumber", onlyNumbers.slice(0, 10));
                      }}
                      onBlur={handleBlur}
                      className={`border bg-text-light rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary ${errors.phoneNumber && touched.phoneNumber
                        ? "border-danger"
                        : ""
                        }`}
                    />

                    {errors.phoneNumber && touched.phoneNumber && (
                      <p className="text-danger text-sm">
                        {errors.phoneNumber}
                      </p>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1">
                      <label htmlFor="password" className="text-text-primary">
                        Password
                      </label>

                      <div className="relative">
                        <Field
                          id="password"
                          type={showPassword ? "text" : "password"}
                          name="password"
                          placeholder="Enter your password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full border bg-text-light rounded p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-primary ${errors.password && touched.password
                            ? "border-danger"
                            : ""
                            }`}
                        />

                        <button
                          type="button"
                          onClick={() => setShowPassword((prev) => !prev)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                        >
                          {showPassword ? (
                            <BiHide size={20} />
                          ) : (
                            <BiShow size={20} />
                          )}
                        </button>
                      </div>

                      {errors.password && touched.password && (
                        <p className="text-danger text-sm">{errors.password}</p>
                      )}
                    </div>

                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="confirmPassword"
                        className="text-text-primary"
                      >
                        Confirm Password
                      </label>

                      <div className="relative">
                        <Field
                          id="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          name="confirmPassword"
                          placeholder="Confirm your password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full border bg-text-light rounded p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-primary ${errors.confirmPassword && touched.confirmPassword
                            ? "border-danger"
                            : ""
                            }`}
                        />

                        <button
                          type="button"
                          onClick={() =>
                            setShowConfirmPassword((prev) => !prev)
                          }
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                        >
                          {showConfirmPassword ? (
                            <BiHide size={20} />
                          ) : (
                            <BiShow size={20} />
                          )}
                        </button>
                      </div>

                      {errors.confirmPassword && touched.confirmPassword && (
                        <p className="text-danger text-sm">
                          {errors.confirmPassword}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="profilePicture"
                      className="text-text-primary"
                    >
                      Profile Picture
                    </label>

                    <input
                      id="profilePicture"
                      type="file"
                      name="profilePicture"
                      accept="image/*"
                      onChange={(event) => {
                        setFieldValue(
                          "profilePicture",
                          event.currentTarget.files[0],
                        );
                      }}
                      className="border bg-text-light rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  {/* Submit */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-primary text-text-light p-2 rounded w-full cursor-pointer hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Registering..." : "Register"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>

            <div className="flex justify-center gap-1 text-sm text-text-primary">
              Already have an account?{" "}
              <span
                className="flex items-center text-primary hover:underline cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Sign In <BiLogIn />
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

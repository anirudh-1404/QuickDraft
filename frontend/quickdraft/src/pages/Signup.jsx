import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import API from "../../API/Interceptor";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!data.name.trim()) {
      newErrors.name = "Name cannot be empty";
    }

    if (!data.email.trim()) {
      newErrors.email = "Email cannot be empty";
    }

    if (!data.password.trim()) {
      newErrors.password = "Password cannot be empty";
    }

    if (!data.confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm password cannot be empty";
    }

    if (
      data.password &&
      data.confirmPassword &&
      data.password !== data.confirmPassword
    ) {
      newErrors.confirmPassword = "Passwords do not match!";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const signupapi = async (formData) => {
    try {
      const response = await API.post("/signup", formData);
      if (response.status === 201) {
        toast.success(response.data.message || "User created successfully");
        navigate("/login");
      }
      console.log(response.data);
    } catch (err) {
      toast.error(err.message || "Something went wrong!");
      console.log("errorrrrrrr", err.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    signupapi(data);

    setData({
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <>
      <section className="min-h-screen bg-slate-50 flex items-center justify-center px-6 pt-32 pb-32">
        <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-sm p-8">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-semibold text-slate-900">
              Create your account
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              Start creating professional drafts in a minute
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col gap-1">
              <label htmlFor="full-name" className="text-sm text-slate-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
                className={`px-4 py-2 rounded-lg border ${
                  errors.name ? "border-red-500" : "border-slate-300"
                }`}
                placeholder="John Doe"
              />

              {errors.name && (
                <p className="text-xs text-red-500 mt-1">{errors.name}</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email-address" className="text-sm text-slate-700">
                Email address
              </label>
              <input
                type="text"
                name="email"
                value={data.email}
                onChange={handleChange}
                className={`px-4 py-2 rounded-lg border ${
                  errors.email ? "border-red-500" : "border-slate-300"
                }`}
                placeholder="you@example.com"
              />

              {errors.email && (
                <p className="text-xs text-red-500 mt-1">{errors.email}</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-sm text-slate-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                className={`px-4 py-2 rounded-lg border ${
                  errors.password ? "border-red-500" : "border-slate-300"
                }`}
                placeholder="**********"
              />

              {errors.password && (
                <p className="text-xs text-red-500 mt-1">{errors.password}</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="confirm-password"
                className="text-sm text-slate-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={data.confirmPassword}
                onChange={handleChange}
                className={`px-4 py-2 rounded-lg border ${
                  errors.confirmPassword ? "border-red-500" : "border-slate-300"
                }`}
              />

              {errors.confirmPassword && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
            <button className="w-full mt-4 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition cursor-pointer">
              Create account
            </button>
          </form>
          <p className="mt-3 text-xs text-center text-slate-500">
            No credit card required.
          </p>
          <p className="mt-2 text-xs text-center text-slate-400">
            By signing up, you agree to our Terms and Privacy Policy.
          </p>
          <p className="mt-6 text-sm text-center text-slate-600">
            Already have an account?{" "}
            <Link to="/login">
              <span className="ml-1 text-blue-600 hover:underline font-medium cursor-pointer">
                Log in
              </span>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default Signup;

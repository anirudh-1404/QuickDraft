import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import API from "../../API/Interceptor";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validation = () => {
    let newErrors = {};

    if (!data.email.trim()) {
      newErrors.email = "Email cannot be empty";
    }

    if (!data.password.trim()) {
      newErrors.password = "Password cannot be empty";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const loginFunction = async (formData) => {
    try {
      const response = await API.post("/login", formData);
      if (response.status === 200) {
        toast.success("Logged in successfully");
        navigate("/");
      }
      console.log(response);
    } catch (err) {
      toast.error(err.message || "Something went wrong");
      console.log("error", err);
    }
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validation()) return;

    loginFunction(data);

    setData({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <section className="min-h-screen bg-slate-50 flex items-center justify-center px-6 pt-32 pb-32">
        <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-sm p-8">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-semibold text-slate-900">
              Welcome back
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Login to continue to QuickDraft
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col gap-1">
              <label htmlFor="email-address" className="text-sm text-slate-700">
                Email address
              </label>
              <input
                type="email"
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
                placeholder="********"
              />

              {errors.password && (
                <p className="text-xs text-red-500 mt-1">{errors.password}</p>
              )}
            </div>
            <div className="flex items-center justify-between text-sm">
              <label
                htmlFor="remember-me"
                className="flex items-center gap-2 text-slate-600"
              >
                Remember me
              </label>
              <span className="text-blue-600 hover:underline cursor-pointer">
                Forgot password
              </span>
            </div>

            <button className="w-full mt-4 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition cursor-pointer">
              Log in
            </button>
            <p className="mt-3 text-xs text-center text-slate-500">
              Your information is securly encrypted.
            </p>
            <p className="mt-6 text-sm text-center text-slate-600">
              Don't have an account?{" "}
              <span className="ml-1 text-blue-600 hover:underline font-medium cursor-pointer">
                Create one
              </span>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;

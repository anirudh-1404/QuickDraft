import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import API from "../../API/Interceptor";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

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
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
                onChange={handleChange}
                value={data.email}
                id="email-address"
                placeholder="you@example.com"
                className="px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-sm text-slate-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={data.password}
                id="password"
                placeholder="********"
                className="px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
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

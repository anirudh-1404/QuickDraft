import React from "react";

const Login = () => {
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
          <form action="" className="space-y-5">
            <div className="flex flex-col gap-1">
              <label htmlFor="email-address" className="text-sm text-slate-700">
                Email address
              </label>
              <input
                type="email"
                name=""
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
                name=""
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

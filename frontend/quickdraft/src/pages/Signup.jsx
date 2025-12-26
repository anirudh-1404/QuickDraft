import React from "react";

const Signup = () => {
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
          <form action="" className="space-y-5">
            <div className="flex flex-col gap-1">
              <label htmlFor="full-name" className="text-sm text-slate-700">
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                className="px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email-address" className="text-sm text-slate-700">
                Email address
              </label>
              <input
                type="email"
                className="px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
                id="email-address"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-sm text-slate-700">
                Password
              </label>
              <input
                type="password"
                className="px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="**********"
                id="password"
              />
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
                className="px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="**********"
                id="confirm-password"
              />
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
            <span className="ml-1 text-blue-600 hover:underline font-medium cursor-pointer">
              Log in
            </span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Signup;

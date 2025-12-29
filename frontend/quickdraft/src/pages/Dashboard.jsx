import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <section className="min-h-screen bg-slate-50 px-6 pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h1 className="text-2xl font-semibold text-slate-900">
              My Reports
            </h1>
            <Link to="/create">
              <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 transition cursor-pointer">
                Create new report
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition">
              {/* report title */}
              <p className="text-sm font-medium text-slate-900">
                Weekly Work Report
              </p>
              {/* report type */}
              <p className="mt-1 text-xs text-slate-500">Weekly</p>
              {/* short preview txt */}
              <p className="mt-3 text-sm text-slate-600 line-clamp-3">
                Short snippet
              </p>
              {/* buttons */}
              <div className="mt-4 flex items-center justify-between">
                <button className="text-sm text-blue-600 hover:underline">
                  View
                </button>
                <button className="text-sm text-red-500 hover:underline">
                  Delete
                </button>
              </div>
            </div>
          </div>
          {/* if no reports */}
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <p className="text-lg font-medium text-slate-700">No reports yet</p>
            <p className="mt-2 text-sm text-slate-500">
              Create your first report to get started
            </p>
            {/* <button className="mt-6 px-5 py-2 rounded-lg bg-blue-600 text-white text-sm cursor-pointer">
              Create report
            </button> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;

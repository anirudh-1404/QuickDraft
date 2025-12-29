import React from "react";

const CreateReport = () => {
  return (
    <>
      <section className="min-h-screen bg-slate-50 px-6 pt-32 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <h1 className="text-2xl font-semibold text-slate-900">
              Create New Report
            </h1>
            <p className="mt-2 text-slate-600 text-sm">
              Add your points and let QuickDraft structure it for you.
            </p>
          </div>
          {/* card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <form action="" className="space-y-6">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="report-title"
                  className="text-sm text-slate-700"
                >
                  Report title
                </label>
                <input
                  type="text"
                  placeholder="e.g. Weekly Work Report"
                  id="report-title"
                  className="px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none "
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="report-type" className="text-sm text-slate-700">
                  Report type
                </label>
                <select
                  name=""
                  id="report-type"
                  className="px-4 py-2 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="">Internship</option>
                  <option value="">Weekly</option>
                  <option value="">Project</option>
                  <option value="">Custom</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="note-points" className="text-sm text-slate-700">
                  Your points / notes
                </label>
                <textarea
                  name=""
                  placeholder="Multiline rough points"
                  id="note-points"
                  className="min-h-[10rem] px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                ></textarea>
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="tags" className="text-sm text-slate-700">
                  Tags (optional)
                </label>
                <input
                  type="text"
                  id="tags"
                  placeholder="work, internship, weekly"
                  className="px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-4 pt-4">
                <button className="px-5 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 transition cursor-pointer">
                  Cancel
                </button>

                <button className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition cursor-pointer">
                  Create report
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateReport;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../API/Interceptor";
import toast from "react-hot-toast";

const CreateReport = () => {
  const [data, setData] = useState({
    title: "",
    type: "",
    rawInput: "",
    tags: "",
  });
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  const createReportFunction = async (formData) => {
    try {
      let response = await API.post("/report/create", formData, {
        withCredentials: true,
      });
      if (response.status === 201) {
        toast.success("Report created");
        navigate("/dashboard");
      }
      console.log(response);
    } catch (err) {
      toast.error(err.message || "Somethong went wrong while creating report!");
      console.log("error", err.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createReportFunction(data);

    setData({
      title: "",
      type: "",
      rawInput: "",
      tags: "",
    });
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="report-title"
                  className="text-sm text-slate-700"
                >
                  Report title
                </label>
                <input
                  type="text"
                  name="title"
                  value={data.title}
                  onChange={handleChange}
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
                  name="type"
                  value={data.type}
                  onChange={handleChange}
                  id="report-type"
                  className="px-4 py-2 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="internship">Internship</option>
                  <option value="weekly">Weekly</option>
                  <option value="project">Project</option>
                  <option value="custom">Custom</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="note-points" className="text-sm text-slate-700">
                  Your points / notes
                </label>
                <textarea
                  name="rawInput"
                  value={data.rawInput}
                  onChange={handleChange}
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
                  value={data.tags}
                  name="tags"
                  onChange={handleChange}
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

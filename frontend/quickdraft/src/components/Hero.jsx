import React from "react";

const Hero = () => {
  return (
    <>
      <section className="pt-32 pb-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* left section */}
          <div>
            <p className="text-sm text-blue-600 font-medium mb-4">
              Turn rough notes into professional drafts
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight">
              Write reports faster. Without overthinking.
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              QuickDraft helps students and professionals create clean,
              structured reports from simple inputs.
            </p>
            <div className="mt-10 flex items-center gap-6">
              <button className="px-6 py-3 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition cursor-pointer">
                Get started for free
              </button>
              {/* <span className="text-sm text-slate-500">
                No credit card required
              </span> */}
            </div>
            <p className="mt-6 text-xs text-slate-500">
              Used by students, interns, and early professionals
            </p>
          </div>

          {/* right */}
          <div className="relative flex items-center justify-center">
            <div className="absolute w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-60"></div>
            <div className="relative bg-white rounded-2xl shadow-lg border border-slate-200 p-6 w-full max-w-sm">
              Draft preview UI
              <p className="text-sm font-medium text-slate-900 mb-2">
                Weekly Work Report
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                This week I worked on API integration, improved authentication
                flow, and resolved UI bugs…
              </p>
              <span className="inline-block mt-4 text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">
                Draft generated
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

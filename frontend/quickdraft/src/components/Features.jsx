import React from "react";

const Features = () => {
  const features = [
    {
      title: "Structured Drafts",
      desc: "Convert rough points into clean, well-organized reports automatically.",
    },
    {
      title: "No Prompt Confusion",
      desc: "Just add your content. No need to learn prompts or formatting rules.",
    },
    {
      title: "Clean & Focused Editor",
      desc: "A distraction-free editor designed for writing clarity and speed.",
    },
  ];

  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm text-blue-600 font-medium tracking-widest uppercase">
            Features
          </p>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-slate-900">
            Everything you need to draft better reports
          </h2>
          <p className="mt-4 text-slate-600 text-base">
            QuickDraft helps you focus on content, not formatting.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-md transition"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-5 text-sm font-semibold">
                {index + 1}
              </div>

              <h3 className="text-lg font-medium text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

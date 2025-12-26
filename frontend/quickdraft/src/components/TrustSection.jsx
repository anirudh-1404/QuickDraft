import React from "react";

const TrustSection = () => {
  const metrics = [
    { name: "100+ Drafts Created" },
    { name: "Fast & Structured Writing" },
    { name: "Simple, Clean UI" },
    { name: "AI-Assisted Workflow" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm text-slate-500 tracking-wide uppercase">
          Trusted by students and professionals
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 border border-slate-200 rounded-xl py-6 px-4 text-slate-900 font-medium text-sm hover:bg-white hover:shadow-sm transition"
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;

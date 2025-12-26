import React from "react";

const TrustSection = () => {
  const metrics = [
    {
      name: "100+ Drafts Created",
    },
    {
      name: "Fast & structured writing",
    },
    {
      name: "Simple UI",
    },
    {
      name: "AI-assisted",
    },
  ];

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-slate-500">
            Trusted by students and professionals
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8"></div>
      </section>
    </>
  );
};

export default TrustSection;

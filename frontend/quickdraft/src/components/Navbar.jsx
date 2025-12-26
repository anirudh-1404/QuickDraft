import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navListItems = [
    {
      name: "How it works",
    },
    {
      name: "Use cases",
    },
    {
      name: "Pricing",
    },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* left */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-slate-900 tracking-tight">
              QuickDraft{" "}
              <span className="hidden sm:block text-xs text-slate-500 mt-[2px]">
                Draft better. Faster.
              </span>
            </span>
          </div>
          {/* center */}
          <ul className="hidden md:flex items-center gap-8">
            {navListItems.map((item) => {
              return (
                <li className="text-sm text-slate-600 hover:text-slate-900 transition cursor-pointer">
                  {item.name}
                </li>
              );
            })}
          </ul>

          {/* right */}
          <div className="flex items-center gap-4">
            <Link to="/login">
              <button className="text-sm text-slate-700 hover:text-slate-900 transition cursor-pointer">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="text-sm px-4 py-2 rounded-full bg-slate-900 text-white hover:bg-blue-600 transition cursor-pointer">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

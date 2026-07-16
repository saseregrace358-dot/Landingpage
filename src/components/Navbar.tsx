import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { APP_URL } from "../config";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-blue-600 sm:text-2xl"
        >
          DTTrack POS
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 font-medium text-slate-700 lg:flex">
          <a href="/" className="transition hover:text-blue-600">
            Home
          </a>

          <Link to="/pos" className="transition hover:text-blue-600">
            POS
          </Link>

          <Link to="/pricing" className="transition hover:text-blue-600">
            Pricing
          </Link>

          <a href="#contact" className="transition hover:text-blue-600">
            Contact
          </a>

          <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 rounded-xl bg-blue-600 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
        
        >
          Get Started
        </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-slate-700 lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">

          <div className="flex flex-col px-5 py-6">

            <a
              href="#home"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 hover:bg-slate-100"
            >
              Home
            </a>

            <Link
              to="/pos"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 hover:bg-slate-100"
            >
              POS
            </Link>

            <Link
              to="/pricing"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 hover:bg-slate-100"
            >
              Pricing
            </Link>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 hover:bg-slate-100"
            >
              Contact
            </a>

            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 rounded-xl bg-blue-600 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
      
            >
              Get Started
            </a>

          </div>

        </div>
      )}
    </nav>
  );
}